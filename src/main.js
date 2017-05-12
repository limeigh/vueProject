// 注意点:'vue'自动去node_modules文件夹中查找vue文件夹中的index.js
import Vue from 'vue'

// 导入vue路由
import vueRouter from 'vue-router'
// 导入vue-resource
import vueResources from 'vue-resource'
// 导入mint-ui(vue的UI组件)
import mintUI from 'mint-ui'
// 导入日期格式化插件moment
import moment from 'moment'
// 导入mint-ui的css
import 'mint-ui/lib/style.min.css'
// 导入mui中的css
import '../static/mui/css/mui.css'
import '../static/mui/css/icons-extra.css'
// 导入自己的css
import '../static/css/site.css'

// 在vue中加载vueRouter
Vue.use(vueRouter)
// 使用vueResource对象才能自动在Vue对象实例上挂载一个$http
Vue.use(vueResources)
// 在vue中加载vueRouter
Vue.use(mintUI) 


// 在vue中注册全局过滤器
Vue.filter('fmtdate',function(input,datefmtstring){
	//日期格式化的过滤器我们使用moment.js的日期格式化插件
	// 因为传入的datefmtstring的格式种类很多，自己写比较复杂
	return moment().format(datefmtstring)

})

// 定义路由规则
var router=new vueRouter({
	linkActiveClass:'mui-active',//通过切换路由更改所对应的样式名称从而切换样式
	routes:[
	{name:'root',path:'/',redirect:'/Home'},//url重定向表示页面一打开就进入Home页
	{name:'home',path:'/Home',component:Home},
	{name:'er',path:'/er',component:er},
	{name:'san',path:'/san',component:san},
	{name:'si',path:'/si',component:si},
	{name:'newsList',path:'/newsList',component:newsList}
	]
})
// 根组件
import App from './App.vue'

// 父组件注册和使用子组件以及父组件向子组件传入数据
// import App from './components/parent.vue'

// 导入components中的组件
import Home from './components/Home/Home.vue'
import er from './components/er/er.vue'
import san from './components/san/san.vue'
import si from './components/si/si.vue'
import newsList from './components/newsList/newsList.vue'



// 实例化一个vue
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})