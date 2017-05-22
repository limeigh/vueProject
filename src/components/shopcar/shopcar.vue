<template>
	<div class="tmpl">
		<div class="row">
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
		</div>
		<div class="row">
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
		</div>
	</div>
</template>

<script>
import number from '../common/number.vue'
import {getItem} from '../../commonJs/localStorageHelper.js'
export default{
	data(){
		return {
			value:true
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
			var goodsObj={}
			goodsArr.forEach(item=>{
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
			console.log(goodsObj)
			console.log(ids)
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
</style>