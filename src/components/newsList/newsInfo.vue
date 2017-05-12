<template>
	<div class="tmpl">
		<div class="title">
			<p>{{newsInfo.title}}</p>
			<p>
				{{newsInfo.add_time | fmtdate('YYYY-MM-DD')}}
			    {{newsInfo.click}}次浏览
			    分类:房产
			</p>
		</div>
		<div class="content" v-html="newsInfo.content"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				newsInfo:{}
			}
		},
		created(){
			this.getnewsinfo()
		},
		methods:{
			getnewsinfo(){
				var id = this.$route.params.id
				var url='http://localhost:1666/api/getnewInfo/'+id
				this.$http.get(url).then(res=>{
					this.newsInfo=res.body.message[0]
				},res=>{
					alert('发生异常')
				})
			}
		}
	}
</script>

<style>
	.title{
		/*height: 100%;*/
		border-bottom: 1px solid rgba(92,92,92,0.1);
		padding: 5px;
	}
	.title>p:first-of-type{
		font-size: 16px;
		color: #0094df;
		font-weight: bold;
	}
	.title>p:last-of-type{
		font-size: 12px;
		color:rgba(92,92,92,0.6);
	}
	.content{
		padding: 5px
	}
</style>