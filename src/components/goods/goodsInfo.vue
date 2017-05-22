<template>
	<div class="tmpl">
	<!-- 轮播图组件 -->
		<CarouselFigure :imgLists="goodsImglists" class="CarouselFigure"></CarouselFigure>
		<div class="sell">
			<h4>{{goodsInfodata.title}}</h4>
			<div class="sellPrice">
				市场价: <s>${{goodsInfodata.market_price}}</s>  销售价: <span>${{goodsInfodata.sell_price}}</span>
			</div>
			<div class="count">
				购买数量:
				<!-- 计数器的组件 -->
				<number v-on:count="getCount"></number>
				<!-- 加入购物车小球动画 -->
				<transition
				  v-on:before-enter="beforeEnter"
				  v-on:enter="enter"
				  v-on:after-enter="afterEnter"
				>
				  <div v-if="isShow" class="ball"></div>
				</transition>
			</div>
			<mt-button type="primary" size="small">立即购买</mt-button>	
			<mt-button type="danger" size="small" @click="goshop">加入购物车</mt-button>
		</div>
		<div class="params">
			<h6>商品参数</h6>
			<ul>
				<li>商品货号:{{goodsInfodata.goods_no}}</li>
				<li>库存情况:{{goodsInfodata.stock_quantity}}</li>
				<li>上架时间:{{goodsInfodata.add_time | fmtdate('YYYY-MM-DD')}}</li>
			</ul>
		</div>
		<div class="footer">
			<mt-button plain type="primary" size="large" @click="desc">图文介绍</mt-button>	
			<mt-button plain type="danger" size="large" style="margin-top: 20px" @click="comment">商品评论</mt-button>	
		</div>
	</div>
</template>

<script>
//导入公用的组件
// 1.0轮播图组件
import CarouselFigure from '../common/CarouselFigure.vue'
// 2.0计数器组件
import number from '../common/number.vue'
// 3.0公用commonJs
import {vueObj} from '../../commonJs/common.js'
// 4.0localStorageHelper.js
import {setItem} from '../../commonJs/localStorageHelper.js'
	export default{
		data(){
			return {
				goodsCount:1,
				isShow:false,
				goodsImglists:[],
				goodsInfodata:{}
			}
		},
		components:{
			CarouselFigure,
			number
		},
		created(){
			this.getgoodsImglists()
			this.getgoodsInfodata()
		},
		methods:{
			getgoodsImglists(){
				var id=this.$route.params.id
				var url='http://localhost:1888/api/getthumimages/'+id
				this.$http.get(url).then(res=>{
					res.body.message.forEach(item=>{
						item.img='http://ofv795nmp.bkt.clouddn.com/'+item.src
					})
					this.goodsImglists=res.body.message
				},res=>{
					console.log('发生异常')
				})
			},
			getgoodsInfodata(){
				var id=this.$route.params.id
				var url='http://localhost:1888/api/goods/getinfo/'+id
				this.$http.get(url).then(res=>{
					this.goodsInfodata=res.body.message[0]
				},res=>{
					console.log('发生异常')
				})
			},
			getCount(count){
				this.goodsCount=count
			},
			comment(){
				var id=this.$route.params.id
				// Vue 路由跳转
				this.$router.push({name:'goodsComment',params:{id:id}})
			},
			desc(){
				var id=this.$route.params.id
				// Vue 路由跳转
				this.$router.push({name:'goodsdesc',params:{id:id}})
			},
			goshop(){
				// 发送数量通知
				vueObj.$emit('goshop',this.goodsCount)
				// 出现动画效果
				this.isShow = !this.isShow
				// 将商品数据存储到localStorage
				setItem({goodsId:this.$route.params.id,goodsCount:this.goodsCount})
			},
			beforeEnter(el){
				el.style.transform='translate3d(0,0,0)'
			},
			enter(el,done){
				el.offsetHeight //实时获取元素高度是为了显示动画效果不然没有动画效果
				el.style.transform='translate3d(100px,250px,0)'
				done()
			},
			afterEnter(el){
				this.isShow = !this.isShow
			}
		}
	}
</script>


<style scoped>
	.CarouselFigure,.sell,.params{
		margin:5px;
		padding:5px;
		border:1px solid rgba(92,92,92,0.3);
		border-radius:5px;
	}
	.sell{
		padding-bottom: 20px;
	}
	.sell h4{
		color: #0094ff;
		border-bottom: 1px solid rgba(92,92,92,0.3);
		padding: 10px 0;
	}
	.sell .sellPrice s{
		margin-right: 20px;
	}
	.sell .sellPrice span{
		font-size: 18px;
		color: red;
	}
	.sell .sellprice,.sell .count{
		padding: 10px;
	}
	.params h6{
		padding: 5px;
		border-bottom: 1px solid rgba(92,92,92,0.3)
	}
	.params ul li{
		list-style: none;
	}
	.count{
		position: relative;
	}
	.ball{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		top: 12px;
		left: 124px;
		z-index: 50;
		transition: all .5s cubic-bezier(.35,-0.44,.83,.67)
	}
</style>