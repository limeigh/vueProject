<template>
	<div class="tmpl">
		<goodsComment :artid="this.$route.params.id"></goodsComment>
	</div>
</template>

<script>
	import goodsComment from '../common/comment.vue'
	export default{
		data(){
			return {

			}
		},
		components:{
			goodsComment
		}
	}
</script>

<style scoped>
	
</style>