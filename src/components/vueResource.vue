<template>
	<div class="tmpl">
		{{getRes}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				getRes:'ajax'
			}
		},
		created(){
			// 表示.vue组件创建完毕以后,并且已经将data中和methods中的所有属性和方法都已经初始化完毕了
			this.jsonpDemo()
		},
		methods:{
			getDemo(){
				// this.$http.get(url).then(function(res){},function(res){})
				var url = '../../data.json'
				this.$http.get(url).then(res=>{
					console.log(res)
					this.getRes=res.body
				},res=>{
					alert('发生异常')
				})
			},
			jsonpDemo(){
				var url='http://api.douban.com/v2/movie/in_theaters?start=1&count=1'
				this.$http.jsonp(url).then(res=>{
					this.getRes=res.body
				},res=>{
					alert("发生异常")
				})
			}
		}
	}
</script>

<style></style>