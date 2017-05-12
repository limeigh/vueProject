<template>
	<div class="tmpl">
		<!-- 利用MUI中的图文列表样式实现新闻列表 -->
		<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
		        <router-link v-bind='{to:"/newsList/newsInfo/"+item.id}'>
		            <img class="mui-media-object mui-pull-left" :src="item.url">
		            <div class="mui-media-body">
		                {{item.title}}
		                <div class='mui-ellipsis'>
		                	<span class="left">发布时间:{{item.time | fmtdate('YYYY-MM-DD')}}</span>
		                	<span class="right">点击数:{{item.click}}</span>
		                </div>
		            </div>
		        </router-link>
		    </li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				newsList:[]
			}
		},
		created(){
			this.getnews()
		},
		methods:{
			getnews(){
				var url='http://localhost:1666/api/getnews'
				this.$http.get(url).then(res=>{
					this.newsList = res.body.message
				},res=>{
					alert('发生异常')
				})
			}
		}
	}
</script>

<style scoped>
	.mui-media-body{
		font-size: 14px;
	}
	.mui-ellipsis{
		display: flex;
		font-size: 	12px;
		color: #0094ff;
		justify-content: space-between;
		position: relative;
		top: 6px;
	}
</style>