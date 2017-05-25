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
// 导入图片预览插件
import VuePreview from 'vue-preview'

// 在vue中加载vueRouter
Vue.use(vueRouter)
// 使用vueResource对象才能自动在Vue对象实例上挂载一个$http
Vue.use(vueResources)
// 在vue中加载vueRouter
Vue.use(mintUI) 
// 在vue中使用VuePreview
Vue.use(VuePreview)


// 在vue中注册全局过滤器
Vue.filter('fmtdate',function(input,datefmtstring){
	//日期格式化的过滤器我们使用moment.js的日期格式化插件
	// 因为传入的datefmtstring的格式种类很多，自己写比较复杂
	return moment(input).format(datefmtstring)

})

// 定义路由规则
var router=new vueRouter({
	linkActiveClass:'mui-active',//通过切换路由更改所对应的样式名称从而切换样式
	routes:[
	{name:'root',path:'/',redirect:'/Home'},//url重定向表示页面一打开就进入Home页
	{name:'home',path:'/Home',component:Home},
	{name:'shopcar',path:'/shopcar',component:shopcar},
	{name:'san',path:'/san',component:san},
	{name:'member',path:'/member',component:member},
	{name:'newsList',path:'/newsList',component:newsList},
	{name:'newsInfo',path:'/newsList/newsInfo/:id',component:newsInfo},
	{name:'photoList',path:'/photo/photoList',component:photoList},
	{name:'photoInfo',path:'/photo/photoInfo/:id',component:photoInfo},
	{name:'goodslist',path:'/goods/goodslist',component:goodslist},
	{name:'goodsInfo',path:'/goods/goodsInfo/:id',component:goodsInfo},
	{name:'goodsComment',path:'/goods/goodsComment/:id',component:goodsComment},
	{name:'goodsdesc',path:'/goods/goodsdesc/:id',component:goodsdesc},
	{name:'login',path:'/login',component:login},
	{name:'setorder',path:'/order/setorder',component:setorder}
	]
})
// 根组件
import App from './App.vue'

// 父组件注册和使用子组件以及父组件向子组件传入数据
// import App from './components/parent.vue'

// 导入components中的组件
import Home from './components/Home/Home.vue'
import shopcar from './components/shopcar/shopcar.vue'
import san from './components/san/san.vue'
import member from './components/member/member.vue'
import newsList from './components/newsList/newsList.vue'
import newsInfo from './components/newsList/newsInfo.vue'
import photoList from './components/photo/photoList.vue'
import photoInfo from './components/photo/photoInfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsComment from './components/goods/goodsComment.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import login from './components/login/login.vue'
import setorder from './components/order/setorder.vue';



// 实例化一个vue
new Vue({
	el:'#app',
	router,
	render:c=>c(App)
})