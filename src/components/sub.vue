<template>
	<div class="tmpl">
		<div class="sub">{{msg}},{{toSub}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:'sub组件'
			}
		},
		props:['toSub']
	}
</script>

<style>
	.sub{
		border:1px solid skyblue;
	}
</style>