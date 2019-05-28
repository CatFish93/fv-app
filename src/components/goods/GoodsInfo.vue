<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuLists="lunbotu"></swiper>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价 :
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;
            销售价 :
            <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>
            购买数量 :
            <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{ goodsinfo.goods_no }}</p>
          <p>库存情况:{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间:{{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import swiper from '../subcomponents/swiper.vue'
// 导入 数字选择框 组件
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
  data(){
    return {
      id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data，方便后期调用
      lunbotu:[], // 轮播图的数据
      goodsinfo:{ 
          title:'小米9',
          market_price:2399,
          sell_price:2199,
          goods_no:201504150027,
          stock_quantity:200,
          add_time:20150212
      },  // 获取到的商品信息
      ballFlag:false,  // 控制小球
      selectedCount:1 // 保存用户选中的商品数量
    };
  },
  created(){},
  methods: {
    goDesc(id){
      // 点击使用编程式导航跳转到 图文介绍页面
      this.$router.push({ name:"goodsdesc",params:{ id } })
    },
    goComment(id){
      // 点击跳转到 评论页面
      this.$router.push({ name:"goodscomment",params: {id} })
    },
    addToShopCar(){
      // 添加到购物车
      this.ballFlag = !this.ballFlag;
      // { id:商品的id, count:要购买的数量, price:商品的单价,selected:true }
      // 拼接出一个，要保存到 store 中 car 数组的商品
      var goodsinfo = {
          id:this.id,
          count:this.selectedCount,
          price:this.goodsinfo.sell_price,
          selected:true
      };
      // 调用 store 中的 mutation
      this.$store.commit("addToCar",goodsinfo);
    },

    //  动画钩子函数的 第一个参数：el，表示要执行动画的那个 DOM元素，是个原生的 JS DOM 对象
    //  可以认为，el 是通过 document.getElementById('')方式获取的原生JS DOM对象
    beforeEnter(el){
      // beforeEnter 表示动画入场之前，动画还没开始，可以在 beforeEnter 中，设置元素开始动画之前的起始样式
      //设置小球开始动画之前的 起始位置
      el.style.transform = "translate(0, 0)";
    },
    enter(el,done){
      //  这句话没有实际的作用，但如果不写，出不来动画效果
      //  可以认为el.offsetWidth 会强制动画刷新
      el.offsetWidth;
      //  enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的 结束状态

      // 获取 小球和徽标 在页面中的位置   domObject.getBoundingRect()
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
      .getElementById('badge').getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      // ES6模版字符串 `translate( ${xDist}px, ${yDist}px )` 不是 单引号
      el.style.transform = `translate( ${xDist}px, ${yDist}px )`;
      el.style.transition = 'all 0.8s cubic-bezier(.4,-0.3,1,.68)';

      //这里的 done，起始就是 afterEnter 这个函数，也就是说：done 是 afterEnter 函数的引用
      done();
    },
    afterEnter(el){
        this.ballFlag = !this.ballFlag;
    },
    getSelectedCount(count){
        // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 中
        this.selectedCount = count;
        console.log("父组件拿到数量值：" + this.selectedCount);
    }
  },
  components:{
    // 注册组件 才能使用 <swiper></swiper>  <numbox></numbox>
    swiper,
    numbox
  }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: yellow;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
  }
}
</style>
