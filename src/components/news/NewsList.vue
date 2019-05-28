<template>
  <div>
    <ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{ item.title }} -- {{ item.id }}</h1> 
						<p class='mui-ellipsis'>
							<span>发表时间：{{ item.add_time | dateFormat }} </span>
							<span>点击：{{ item.click }}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
// import { Toast } from "mint-ui";
export default {
  data(){
  return{
    newslist:[
      { id: 0, title:'鸿雁在云鱼在水', 				 img_url:require('../../images/0.jpg'),click:5 },
      { id: 1, title:'欣欣此生意，自尔为佳节', 		  img_url:require('../../images/1.jpg') },
      { id: 2, title:'一箫一剑平生意，负尽狂名十五年。', img_url:require('../../images/2.jpg') },
      { id: 3, title:'便觉眼前生意满，东风吹水绿参差。', img_url:require('../../images/0.jpg') },
      { id: 4, title:'谁把庭槐浪剪除，源头生意自赢馀。', img_url:require('../../images/1.jpg') },
      { id: 5, title:'分别说三乘，惹得一身债。', 		  img_url:require('../../images/2.jpg') },
      { id: 6, title:'拟欲近前，知君纳败。',   		  img_url:require('../../images/0.jpg') },
      { id: 7, title:'衣冠不改只如先，关会通行满市廛。', img_url:require('../../images/1.jpg') },

    ] // 获取新闻列表
  };
	},
	// created(){
	// 	this.getNewList();
	// },
	methods:{
		// getNewList(){
		// 	// 获取新闻列表
		// 	this.$http.get("api/getnewslist").then(reslut =>{
		// 		if(reslut.body.status === 0 ){
					
		// 		}else{
		// 			Toast('获取失败')
		// 		}
		// 	})
		// }
	}
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    h1{ font-size: 14px; }
	.mui-media-object{
		border-radius: 20%;
	}
  .mui-ellipsis{
    font-size: 12px;
    color:skyblue;
    display: flex;
    justify-content: space-between;
  }
}
</style>
