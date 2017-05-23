<template>
	<div class="tmpl">
<!-- 		<div class="row">
			<div class="left">
				<mt-switch v-model="value" class="switch"></mt-switch>
			</div>
			<div class="center">
				<img width="75" height="75" src="" alt="">
			</div>
			<div class="right">
				<h4>标题</h4>
				<span>$2333</span>
				<number v-on:count="getCount" class="number"></number>
				<a href="#">删除</a>
			</div>
		</div> -->
		<div class="null" v-if="isShow">
			购物车空空如也!!
		</div>
		<div class="row" v-for="(item,index) in shopcarLists" v-if="!isShow">
			<div class="left">
				<mt-switch v-model="values[index]" class="switch"></mt-switch>
			</div>
			<div class="center">
				<img width="75" height="75" :src="item.thumb_path" alt="">
			</div>
			<div class="right">
				<h4>{{item.title}}</h4>
				<span>${{item.sell_price}}</span>
				<number v-on:count="getCount" class="number" :numberCount="item.count"></number>
				<a href="#">删除</a>
			</div>
		</div>

		<!-- 总计 -->
		<div class="total" v-if="!isShow">
			<div class="left">
				<h5>总计(不含运费)</h5>
				<span>已经勾选商品0件,总价$0元</span>
			</div>
			<div class="right">
				<mt-button type="danger" size="normal">去结算</mt-button>
			</div>
		</div>
		{{values}}
	</div>
</template>

<script>
import number from '../common/number.vue'
import {getItem} from '../../commonJs/localStorageHelper.js'
export default{
	data(){
		return {
			isShow:false,
			values:[],
			shopcarLists:[]
		}
	},
	created(){
		this.getlocalStorage()
	},
	components:{
		number
	},
	methods:{
		getCount(count){
			console.log(count)
		},
		getlocalStorage(){
			var goodsArr=getItem()
			if(!goodsArr.length){
				this.isShow = true
				return
			}
			var goodsObj={}
			goodsArr.forEach(item=>{
				this.values.push(false) //初始化switch默认值
				if(goodsObj[item.goodsId]){
					goodsObj[item.goodsId] += item.goodsCount
				}else{
				   goodsObj[item.goodsId] = item.goodsCount
				}
			})
			var IdArr=[]
			for(var key in goodsObj){
				IdArr.push(key)
			}
			var ids = IdArr.join(',')
			// console.log(goodsObj)
			// console.log(ids)
			var url='http://localhost:1888/api/goods/getshopcarlist/'+ids
			this.$http.get(url).then(res=>{
				res.body.message.forEach(item=>{
					item.thumb_path='http://ofv795nmp.bkt.clouddn.com/'+item.thumb_path
					item.count=goodsObj[item.id]
				})
				this.shopcarLists=res.body.message
			},res=>{
				console.log('发生异常')
			})
		}
	}	
}
</script>

<style scoped>
	.row{
		display: flex;
		margin-top: 5px;
		padding: 5px;
		border-bottom: 1px solid rgba(1,1,1,.3)
	}
	.row .left{
		flex: 0 0 70px;
		position: relative;
	}
	.row .left .switch{
		position: absolute;
		top:50%;
		margin-top: -16px;
	}
	.row .center{
		flex: 0 0 75px;
	}
	.row .right{
		flex: 1
	}
	.row .right h4{
		color: #0094df;
		padding: 5px 0;
	}
	.row .right .number{
		display: inline;
		margin: 0 10px;
	}
	.row .right span{
		color: red;
		font-size: 16px;
	}

	/*总计*/
	.total{
		padding: 5px;
		background-color: rgba(1,1,1,0.1);
		margin-top:10px;
		overflow: hidden;
		position: relative;
	}
	.total .left{
		float: left;
		width: 70%;
	}
	.total .right{
		float: right;
		width: 28%;
		position: absolute;
		top:50%;
		margin-top: -20px;
		right: 0;
	}
	.total h5{
		color: black;
		font-weight: bold;
		margin-bottom: 10px;
	}
</style>