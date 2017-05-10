// 注意点:'vue'自动去node_modules文件夹中查找vue文件夹中的index.js
import Vue from 'vue'

// 导入vue路由
import vueRouter from 'vue-router'
// 导入vue-resource
import vueResources from 'vue-resource'
// 导入mint-ui(vue的UI组件)
import mintUI from 'mint-ui'
// 导入mint-ui的css
import 'mint-ui/lib/style.min.css'
// 导入mui中的css
import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'

// 在vue中加载vueRouter
Vue.use(vueRouter)
// 使用vueResource对象才能自动在Vue对象实例上挂载一个$http
Vue.use(vueResources)
// 在vue中加载vueRouter
Vue.use(mintUI) 


// 在vue中注册全局过滤器
Vue.filter('toLowerCase-g',function(name){
	return name.toLowerCase()
})

Vue.filter('replaceStr-g',function(name,p){
	return name.replace(p,'')
})

// 定义路由规则
var router=new vueRouter({
	routes:[
	{name:'Login',path:'/Account/Login/:id/:name',component:Login},
	{name:'Register',path:'/Account/Register',component:Register},
	{name:'vueResource',path:'/Account/vueResource',component:vueResource}
	]
})
// 根组件
import App from './App.vue'

// 父组件注册和使用子组件以及父组件向子组件传入数据
// import App from './components/parent.vue'

// 导入Login和Register组件
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import vueResource from './components/vueResource.vue'


// 实例化一个vue
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})