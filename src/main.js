//入口文件
// console.log('ok');
/* jshint esversion: 6 */ 
import Vue from 'vue'

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter);

// 注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state:{ // this.$store.state.***
    // 将购物车中的商品数据，用一个数组存储起来，在car数组中，存储一些商品的对象
    // id 商品的id，count 要购买的数量，price 商品的单价 selected:false
    car:[]  
  },
  mutations:{   // this.$store.commit('方法的名称','按需传递唯一参数')
    addToCar(state,goodsinfo){
      var flag = false;
      state.car.some(item =>{
          if(item.id == goodsinfo.id){
              item.count += parseInt(goodsinfo.count);
              flag = true;
              return true;
          }
      });
      if(!flag){
          state.car.push(goodsinfo);
      }
      // 当更新 car 之后，把car数组 存储 到本地 的localStorege 中
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    updateGoodsInfo(state,goodsinfo){
      // 修改购物车商品的数量
      state.car.some(item=>{
        if(item.id == goodsinfo.id){
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      });
      // 当修改完商品的数量，把最新的购物车数据，保存到本地存储中
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    removeFormCar(id){
      if(item.id == id ){
        state.car.splice(i,1);
        console.log('ok');
        return true;
      }
    }
  },
  getters:{   // this.$store.getters.***
    getAllCount(state){
      var c = 0;
      state.car.forEach(item =>{
        c += item.count;
      });
      return c;
    },
    getGoodsCount(state){
      var o = {};
      state.car.forEach(item =>{
        o[item.id] = item.count;
      });
      return o;
    },
    getGoodsSelected(state){
      var o = {};
      state.car.forEach(item=>{
          o[item.id] = item.selected;
      });
      return o;
    }
  }
});

import moment from 'moment';
Vue.filter('dateFormat',function(dateStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dateStr).format(pattern);
});

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//  按需导入 Mint-Ui 中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui';
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI);
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

// 1.3 导入自己的 router.js 路由模块
import router from './router.js'

// 导入 app 根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router, // 1.4 挂载路由对象到 VM 实例上
  store
});