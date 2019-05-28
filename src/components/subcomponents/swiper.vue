<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环，一定要使用 key -->
      <!-- 谁调用 轮播图组件，谁传递 lunbotuList -->
      <!-- lunbotuList 是 父组件向子组件传值来设置 -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  //  props:["lunbotuList"],
  data(){
    return {
      lunbotuList:[            
        { img: require('../../images/0.jpg') },
        { img: require('../../images/1.jpg') },
        { img: require('../../images/2.jpg') }                          
      ],
    };
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;

  .mint-swipe-item{
    &:nth-child(1){background-color: red;}
    &:nth-child(2){background-color: blue;}
    &:nth-child(3){background-color: yellow;}
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>

