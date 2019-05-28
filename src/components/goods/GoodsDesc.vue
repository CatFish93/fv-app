<template>
  <div class="goodsdesc-container">
    <h3>{{ info.title }}</h3>
    <hr>       
    <div class="content" v-html="info.content"></div>
    <img :src="info.img_url" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:{  
        title:'小米9',
        content:'小米9，是小米公司旗下一款智能手机，内部代号是战斗天使，采用：高通骁龙855旗舰平台，最高配备12GB内存+256GB存储；搭载索尼三摄全焦段镜头1200万人像镜头， 4800万像素主摄，1600万微距+超广角；搭载6.39英寸三星AMOLED水滴屏。',
        img_url:"https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=063f70d9df00baa1ae214fe92679d277/63d0f703918fa0ec91f8d938289759ee3d6ddbcc.jpg"
      }, // 图文数据 
    }
  },
  created(){},
  methods: {}
}
</script>

<style lang="scss" scoped>
.goodsdesc-container{
  padding: 4px;
  background-color: #eee;
  h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    font-size: 14px;
  }
  img{
    width: 100%;
  }
}
</style>