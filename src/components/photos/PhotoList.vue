<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <!-- 通过 加上 "v-bind:class" 使:class 变为一个数组，里面类 要对应的 类mui-control-item 变为数组的内容，要加 单引号  -->
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active':'']" 
          v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
              {{ item.title }}
          </a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.pid" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title" style="font-size:14px;">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>


<script>
// 1.导入 mui 的js文件,但是会报错，需要移除 安装cnpm install babel-plugin-transform-remove-strict-mode。
// 在babelrc中 "plugins" 添加 "transform-remove-strict-mode"  手动移除 严格模式
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data () {
    return {
      title:'',
      id:'',
      img_url:'',
      cates:[ 
        { id: 0, title:'全部', } ,
        { id: 1, title:'家居生活', } ,
        { id: 2, title:'电子器材', } ,
        { id: 3, title:'办公用具', } ,
        { id: 4, title:'交通工具', } ,
        { id: 5, title:'衣服时尚', } ,
        { id: 6, title:'水果生鲜', } ,
      ],
      list:[
        {  pid:'0', img_url:require('../../images/home1.jpg'), title:'演绎简约复古小情调',   zhaiyao:'设计上以木质感的简约风格为基调，通过细节绿植的搭配，以及复古调的人像装饰画，把这个小房子点缀出独特华丽的艺术氛围感。' },
        {  pid:'1', img_url:require('../../images/home2.jpg'), title:'强烈而浓郁的复古风格', zhaiyao:'设计上以木质感的简约风格为基调，通过细节绿植的搭配，以及复古调的人像装饰画，把这个小房子点缀出独特华丽的艺术氛围感。' },
        {  pid:'2', img_url:require('../../images/home3.jpg'), title:'演绎简约复古小情调',   zhaiyao:'设计上以木质感的简约风格为基调，通过细节绿植的搭配，以及复古调的人像装饰画，把这个小房子点缀出独特华丽的艺术氛围感。' },
        {  pid:'3', img_url:require('../../images/home4.jpg'), title:'演绎简约复古小情调',   zhaiyao:'设计上以木质感的简约风格为基调，通过细节绿植的搭配，以及复古调的人像装饰画，把这个小房子点缀出独特华丽的艺术氛围感。' },
      ] // 图片列表的数组
    };           
  },
  // created(){
  //   this.getAllCategory();
  //     // 默认进入页面，就主动请求 所有图片列表的数据
  //     this.getPhotoListByCateId(0);
  // },
  mounted () {    // 当组件中的DOM结构被渲染好并放入到页面中后，会执行这个 钩子函数
    // 2.初始化滑动组件
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    // getAllCategory(){
    //   // 获取所有的图片分类
    //   this.$http.get("api/getimgcategory").then(result =>{
    //     if(result.body.status === 0){
    //       // 手动拼接出一个最完整的 分类列表
    //       result.body.message.unshift({ title:"全部",id: 0 })
    //       this.cates = result.body.message;
    //     }
    //   });
    // } ,
    // getPhotoListByCateId(cateId){
    //   // 根据 分类Id，获取图片列表
    //   this.$http.get("api/getimages/"+ cated).then(result =>{
    //     if(result.body.status ===0 ){
    //         this.list = result.body.message;
    //     }
    //   });
    // }      
  }
    
};
</script>

<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  li{
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img{
      width:100%;
      height: 100%;          
      vertical-align: middle;
    }
    // 这个是 mint-ui 的懒加载，其它的样式不能在这里加
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      color:white;
      text-align: left;
      position: absolute;
      bottom:0;
      background-color: rgba(0,0,0,0.4);
      max-height: 84px;
      .info-title{
          font-size: 14px;
      }
      .info-body{
          font-size:13px;
      }
    }
  }
    
}

</style>
