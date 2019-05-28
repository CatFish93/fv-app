<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr/>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="content"></textarea>

    <mt-button type="primary" size="large" @click="add">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <p class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dateFormat }}
        </p>
        <p class="cmt-body">{{ item.content === 'undefined'?'此用户很懒，什么都没说': item.content }}</p>
      </div>            
    </div>

    <!-- plain 颜色中空 -->
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
  data () {
    return {
      user_name:'',
      add_time:'',
      content:'',
      i:0,
      pageIndex:1, // 默认展示第一页数据
      comments:[
        { 'user_name':'忠实粉0', 'add_time':'2019-01-01T04:05:34.000Z','content':'good study' },
        { 'user_name':'忠实粉1', 'add_time':'2019-01-01T04:05:34.000Z','content':'day day up' },
        { 'user_name':'忠实粉2', 'add_time':'2019-01-01T04:05:34.000Z','content':'one step one step' },
        { 'user_name':'忠实粉3', 'add_time':'2019-01-01T04:05:34.000Z','content':'不能跨域引入数据，只能做静态数据' },
        { 'user_name':'忠实粉4', 'add_time':'2019-01-01T04:05:34.000Z','content':'不完善，差评' },
      ] // 所有的评论数据
    };
  },
  // created(){
  //     this.getComments();
  // },
  methods: {
    // getComments(){
    //   this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
    //   .then(result =>{
    //     if(result.body.status === 0){
    //       this.comments = result.body.message;
    //       每当获取新评论数据的时候不把老数据清空覆盖，应该老数据拼接上新数据
    //       this.comments = this.comments.concat(result.body.message)
    //     }else{
    //       '获取评论失败'
    //     }
    //   })
  },
  add(){
    if(this.content.length === 0){
      return Toast("空的评论内容不能发表！");
    }else{
      this.comments.unshift({ i:this.i, 'user_name':this.user_name, 'add_time':this.add_time,'content':this.content },);
      // 刷新 输入的 评论内容为空
      this.content = ' '
    }
  },
  getMore(){
    // 加载更多
    this.pageIndex++;
    // this.getComments(); //有数据引入才有用
  },
  postComment(){
    // 检验是否为空内容
    if(this.msg.trim().length === 0){
      return Toast("评论内容不能为空！");
    }
    // 发表评论
    // 参数1：请求的url地址
    // 参数2：提交给服务器的数据对象{ content :this.msg}
    // 参数3：定义提交的时候，表单中数据的格式 { emulateJSON:ture}
    this.$http
      .post("api/postcomment/" + $route.parama.id,{
        content:this.msg.trim()
      })
      .then(function(result){
        if(result.body.status === 0){
          // 1.拼接一个评论对象
          var cmt = {
            user_name:"匿名用户",
            add_time:"Date.now()",
            contnet:this.msg.trim()
          };
          this.comments.unshift(cmt);
        }
      })
    },
  props:["id"],
}
</script>

<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list{
    margin: 5px 0;
    .cmt-item{
      font-size:13px;
      .cmt-title{
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body{
        line-height: 20px;
        text-indent:2em;
      }
    }
  }
}
</style>
