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
			</div>
			<mt-button type="primary" size="small">立即购买</mt-button>	
			<mt-button type="danger" size="small">加入购物车</mt-button>
		</div>
	</div>
</template>

<script>
//导入公用的组件
// 1.0轮播图组件
import CarouselFigure from '../common/CarouselFigure.vue'
// 2.0计数器组件
import number from '../common/number.vue'

	export default{
		data(){
			return {
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
				console.log('count='+count)
			}
		}
	}
</script>


<style scoped>
	.CarouselFigure,.sell{
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
</style>