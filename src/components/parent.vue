<template>
	<div class="tmpl">
		<div class="parent">{{msg}}</div>
		<subVue :toSub="toSub"></subVue>
	</div>
</template>

<script>
// 导入sub组件
import subVue from './sub.vue'
	export default{
		data(){
			return {
				msg:'parent组件',
				toSub:'from parent !' //向sub组件传值
			}
		},
		components:{ //注册子组件
			subVue 
		}
	}
</script>

<style>
	.parent{
		border:1px solid red;
	}
</style>