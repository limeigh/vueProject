<template>
	<div class="tmpl">
		<CarouselFigure :imgLists="goodsImglists" class="CarouselFigure"></CarouselFigure>
	</div>
</template>

<script>
//导入公用的轮播图组件
import CarouselFigure from '../common/CarouselFigure.vue'

	export default{
		data(){
			return {
				goodsImglists:[]
			}
		},
		components:{
			CarouselFigure
		},
		created(){
			this.getgoodsImglists()
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
			}
		}
	}
</script>


<style scoped>
	.CarouselFigure{
		margin:5px;
		padding:5px;
		border:1px solid rgba(92,92,92,0.3);
	}
</style>