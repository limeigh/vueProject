<template>
	<div class="tmpl">
		<div>{{msg}}</div>

		<!-- 过滤器filters -->
		<input type="text" v-model="name">
		{{name | toLowerCase-g | replaceStr-g('v')}} 
	</div>
</template>

<script>
// 导入sub组件
import subVue from './sub.vue'
	export default{
		data(){
			return {
				msg:'注册页',
				name:''
			}
		}
	}
</script>

<style>
</style>