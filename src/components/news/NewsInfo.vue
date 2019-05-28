<template>
  <div class="newsinfo-container">

    <!-- 大标题 -->
    <h3 class="title">{{ newsinfotitle }}</h3>

    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间:{{ add_time | dateFormat }}</span>
      <span>点击: {{ click }}次</span>
    </p>
    <hr/>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfocontent">{{ newsinfocontent }}</div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>

<script>

import comment from "../subcomponents/comment.vue"

export default {
  data(){
    return {
      id: this.$route.params.id,
      click: 3,
      newsinfo:{},
      'add_time':'2019-01-01T04:05:34.000Z',
      'newsinfotitle':'新闻标题',
      'newsinfocontent':
          '<p>诗词是中文独有的一种文体，有特殊的格式及韵律。诗按音律分，可分为古体诗和近体诗两类。古体诗和近体诗是唐代形成的概念，是从诗的音律角度来划分的。</p>'             
    }
  },
  // created(){
  //     this.getNewsInfo();
  // },
  methods:{
    // // 获取新闻详情
    // this.$http.get("api/getnew/" + this.id ).then(result => {
    //     if(result.body.status === 0){
    //         this.newsinfo = result.body.message[0];
    //     }else{
    //         Toast("获取新闻失败");
    //     }
    // })
  },
  components:{
    "comment-box":comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color:red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content p{
    font-size: 14px;
  }
}
</style>
