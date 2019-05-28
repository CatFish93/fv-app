<template>
  <div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
        <span>发表时间:{{ photoinfo.add_time | dateFormat }}</span>
        <span>点击:{{ photoinfo.click }}次</span>
    </p>

    <hr/>

    <!-- 缩略图的区域 -->
    <div class="thumbs">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content">{{ photoinfo.content }}</div>

    <!-- 放置一个现场的 评论子组件 -->
    <cmt-box :id="pid"></cmt-box>

  </div>
</template>

<script>
// 1. 导入 评论子组件
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
        pid:'',
        // pid:this.$route.parama.pid,
        photoinfo:{
          'add_time':'2019-01-01T04:05:34.000Z',
          click:2,
          title:'现代风格家居主题',
          content:'家居设计中，紫色系很难掌握。可以将它与经典百搭的高级灰组合，既能将设计的难度相对降低，又能满足对高雅格调的所有幻想，可谓是一举两得的绝佳选择。当刚性的灰与柔美的紫相互掩映，迷人魅力尽情地撩拨感官，联袂演绎出一幕幕令人沉沦的时尚大片。'
        },
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          },         
        ]
      }            
    },
    // created(){
    //     this.getPhotoInfo();
    // },
    methods: {
      // getPhotoInfo(){
    //     // 获取图片的详情
    //     this.$http.get('api/getimageInfo/'+ this.id).then(result =>{
    //         if(result.body.status === 0){
    //             this.photoinfo = result.body.message[0];
    //         }
    //     })
      // },
      handleClose () {
        console.log('close event');
      }
    },
    components:{
      // 2.注册 评论子组件
      "cmt-box":comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
  padding: 3px;
  h3{
    color: #226aff;
    font-size: 18px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }

  .thumbs{    
    .my-gallery{
      display: inline;
      figure{
        margin: 5px;
        img {
          margin: 5px;
          border: 0;
          width: 105px;
          height: 80px;
          box-shadow: 0 0 8px #999;
        }
      }        
    }              
  }

  .content{
    font-size: 13px;
    line-height: 30px;
  }

}
</style>
