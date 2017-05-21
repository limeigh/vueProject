<template>
	<div class="tmpl">
		<h3>{{goodsdesc.title}}</h3>
		<div class="content" v-html="goodsdesc.content"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				goodsdesc:{}
			}
		},
		created(){
			this.getgoodsdesc()
		},
		methods:{
			getgoodsdesc(){
				var id=this.$route.params.id
				var url='http://localhost:1888/api/goods/getdesc/'+id
				this.$http.get(url).then(res=>{
					this.goodsdesc=res.body.message[0]
				},res=>{
					console.log('发生异常')
				})
			}
		}
	}
</script>

<style scoped>
	.tmpl{
		padding: 5px;
	}
	.tmpl h3{
		color: #0094df;
		padding: 10px;
		border-bottom: 1px solid rgba(92,92,92,0.3)
	}
	.tmpl .content{
		margin-top: 10px;
	}
	.tmpl .content img{
		width: 100%;
	}
</style>