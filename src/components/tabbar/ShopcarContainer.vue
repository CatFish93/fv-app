<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">                        
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
            <img :src="item.img_url" alt="" />
            <div class="info">
              <h1>{{ item.title }}</h1>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content" >
        <div class="mui-card-content-inner pay">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品<span class="red">0</span>件，总价<span class="red">￥0</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>   
      </div>
    </div>

    <p>{{ $store.getters.getGoodsSelected }}</p>
  </div>
</template>

<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
export default {
  data () {
    return {
      img_url:'',
      goodslist:[
        {
          id:'0',
          title:'荣耀V20 6GB+128GB',
          img_url:("https://m.360buyimg.com/babel/jfs/t1/16813/39/12659/358796/5c99f002Ee7721cc6/a25a0116a081b6e6.jpg"),
          sell_price:2199,
        },
        {
          id:'1',
          title:'荣耀V20 6GB+128GB',
          img_url:("https://m.360buyimg.com/babel/jfs/t1/16813/39/12659/358796/5c99f002Ee7721cc6/a25a0116a081b6e6.jpg"),
          sell_price:2199,
        },
        {
          id:'2',
          title:'荣耀V20 6GB+128GB',
          img_url:("https://m.360buyimg.com/babel/jfs/t1/16813/39/12659/358796/5c99f002Ee7721cc6/a25a0116a081b6e6.jpg"),
          sell_price:2199,
        },
      ] // 购物车中所有商品数据
    };
  },
  // created(){
  //   this.getGoodsList();
  // },
  methods: {
    // getGoodsList(){
    //   var idArr = [],
    //   this.$store.state.car.forEach(item => idArr.push(item.id));
    //   this.$http.get('api/goods/getshopcarlist/' + idArr.join(",")).then(result=>{
    //     this.goodslist = result.body.message;
    //   })
    // }
    // remove(id,index){
    //     this.goodslist.splice(index,1);
    // }
  },
  components:{
    numbox
  }
}
</script>

<style lang="scss" scoped>
.shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .goods-list{
    .mui-card-content-inner{
      display: flex;
      // align-items 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。
      align-items: center;
    }
    img{
      width: 60px;
      height: 60px;
    }
    h1{
      font-size:13px;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price{ color:red; font-weight: bold; }
    }
  }
  .pay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red{
      color: red;
    }
  }
}
</style>
