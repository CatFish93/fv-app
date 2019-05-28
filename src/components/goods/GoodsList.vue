<template>
  <div class="goods-list">       
    <!-- <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in goodslist" :key="item.id"  tag="div">
        <img :src="item.img_url" alt="" />
        <h1 class="title">{{ item.title }}</h1>
        <div class="info">
            <p class="price">
                <span class="now">{{ item.sell_price }}</span>
                <span class="old">{{ item.market_price }}</span>
            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩{{ item.stock_quantity }}件</span>
            </p>
        </div>
    </router-link> -->

    <!-- 在网页中，有2种跳转方式： -->
    <!-- 1. 使用 a 标签的形式叫做 标签跳转 -->
    <!-- 2. 使用 window.location.href 的形式，叫做编程式导航 -->
    <div  class="goods-item" v-for="item in goodslist" :key="item.gid"
    @click="goDetail(item.gid)">
      <img :src="item.img_url" alt="" />
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">{{ item.sell_price }}</span>
          <span class="old">{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex:1,
      img_url:'',
      title:'',
      sell_price:'',
      market_price:'',
      stock_quantity:'',
      goodslist:[
        {   
          gid: 0,
          img_url:"https://m.360buyimg.com/babel/jfs/t1/16813/39/12659/358796/5c99f002Ee7721cc6/a25a0116a081b6e6.jpg",
          title:'荣耀V20 胡歌同款 麒麟980芯片 魅眼全视屏 4800万深感相机 6GB+128G',
          sell_price:'￥2799',
          market_price:'￥2999',
          stock_quantity:'60'
        },
        {   
          gid: 1,
          img_url:"https://img12.360buyimg.com/n7/jfs/t2737/301/2095021926/171643/c331a4b7/5757aa19N796cd1ca.jpg",
          title:'佳能（Canon）PowerShot G7 X Mark II 数码相机 Vlog视频拍摄',
          sell_price:'￥3999',
          market_price:'￥4299',
          stock_quantity:'56'
        },
        {   
          gid: 2,
          img_url:"https://img14.360buyimg.com/n0/jfs/t22144/336/515447244/297549/8c269ff0/5b0fcbafNc30f70ec.jpg",
          title:'小米8 全面屏游戏智能拍照手机 6GB+128GB 黑色 骁龙845 全网通4G 双卡双待',
          sell_price:'￥2599',
          market_price:'￥2999',
          stock_quantity:'60'
        },
        {   
          gid: 3,
          img_url:"https://img14.360buyimg.com/n0/jfs/t1/16130/39/12690/305219/5caac12aEbb843fa5/ce6c1dee969fb626.jpg",
          title:'小米9 4800万超广角三摄 8GB+128GB全息幻彩蓝 骁龙855 全网通4G 双卡双待 水滴全面屏拍照游戏智能手机',
          sell_price:'￥3299',
          market_price:'￥3599',
          stock_quantity:'6'
        },
        {   
          gid: 4,
          img_url:"https://img14.360buyimg.com/n0/jfs/t17137/134/1253764714/149950/acf159b1/5ac1bf58Ndefaac16.jpg",
          title:'华为 HUAWEI P20 AI智慧徕卡双摄全面屏游戏手机 6GB+64GB 亮黑色 全网通移动联通电信4G手机 双卡双待',
          sell_price:'暂无',
          market_price:'暂无',
          stock_quantity:'0'
        },
        {   
          gid: 5,
          img_url:"https://img14.360buyimg.com/n0/jfs/t1/763/23/3810/69901/5b997c0bE935c19c5/ce91ae1a89c113c7.jpg",
          title:'Apple iPhone XR (A2107) 64GB 黑色 全网通（移动4G优先版） 双卡双待',
          sell_price:'￥5999',
          market_price:'￥6999',
          stock_quantity:'1000'
        },
      ],
    };
  },
  // created(){
  //     this.getGoodsList();
  // },
  methods: {
    // getGoodsList(){
    //   // 获取商品列表
    //   this.$http
    //   .get("api/getgoods?pageindex=" + this.pageindex)
    //   .then(result =>{
    //       if(result.body.status === 0){
    //           this.goodslist = result.body.message;
    //       }
    //   })
    // },
    // add(){
    //   this.goodslist = this.goodslist2 + this.goodslist;
    //   // this.getGoodsList.unshift({ 
    //   //     id:this.id, 
    //   //     img_url:this.img_url, 
    //   //     title:this.title,
    //   //     sell_price:this.sell_price,
    //   //     market_price:this.market_price,
    //   //     stock_quantity:this.stock_quantity,
    //   //     });
    // },
    getMore(){
      this.pageindex++;
        
    },
    goDetail(id){
      // 使用Js的形式进行路由导航

      // 注意：区分 this.$route 和 this.$router 这2个对象，
      // 其中：this.$route 是路由【参数对象】，所有路由中的参数，params，query 都属于它
      // 其中：this.$router 是一个路由【导航对象】，用它 可以方便的 使用js代码，实现路由的 前进、后退、跳转到新的 url地址
      console.log(this);
      // 1.最简单的
      // this.$router.push("/home/goodsinfo/" + id);
      // 2. 传递对象
      // this.$router.push({ path:"/home/goodsinfo/" + id });
      // 3.  传递命名的路由
      this.$router.push({ name:"goodsinfo",params:{ id } });
    }
  },
}
</script>

<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  
  .goods-item{
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px;
    padding: 4px 0;

    // 把每项图片改为 纵向分布：内容上下对齐 可以将多出的内容覆盖掉 》》不会挤掉盒子模型
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 293px;
    img{
      width: 100%;
    }
    h1{
      max-height: 40px;
      overflow: hidden;
    }

    .title{
      font-size: 13px;
    }

    .info{
      background-color: #eee;
      p{
        margin:0;
        padding: 3px;         
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          // 给老价格加上 划线
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
    }
  }
}

</style>
