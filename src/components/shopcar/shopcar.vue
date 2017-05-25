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
				<numbers v-on:count="getCount" class="number" :numberCount="item.count" :numberId="item.id" :is="currentView"></numbers>
				<a @click="del(item.id)">删除</a>
			</div>
		</div>

		<!-- 总计 -->
		<div class="total" v-if="!isShow">
			<div class="left">
				<h5>总计(不含运费)</h5>
				<span>已经勾选商品{{selectgoods}}件,总价${{totalPrice}}元</span>
			</div>
			<div class="right">
				<mt-button type="danger" size="normal" @click="tosettemt">去结算</mt-button>
			</div>
		</div>
<!-- 		{{values}} -->
	</div>
</template>

<script>
var switching = true
import { Toast } from 'mint-ui';
import number from '../common/number.vue'
import number1 from '../common/number.vue' //number1是为了后面进行删除操作的时候重载组件
import {vueObj} from '../../commonJs/common.js'
import {getItem,setItem} from '../../commonJs/localStorageHelper.js'
import {getUserId} from '../../commonJs/loginHelper.js'
export default{
	data(){
		return {
			totalPrice:0,
			isShow:false,
			values:[],
			shopcarLists:[],
			currentView:'number'
		}
	},
	created(){
		this.getlocalStorage()
	},
	components:{
		number,
		number1
	},
	methods:{
		goshop(data){
			vueObj.$emit('goshop',data)
		},
		getCount(resobj){
			if(resobj.type === 'add'){
				this.add(resobj)
				this.updateShopcarLists(1,resobj.goodsId)
				this.goshop(1)
				return
			}
			this.substrict(resobj)
			this.updateShopcarLists(-1,resobj.goodsId)
			this.goshop(-1)
		},
		updateShopcarLists(count,goodsId){
			for(var i=0;i<this.shopcarLists.length;i++){
				if(this.shopcarLists[i].id == goodsId){
					this.shopcarLists[i]['count'] = this.shopcarLists[i]['count'] + count
				}
			}
		},
		add(resobj){
			setItem({goodsId:resobj.goodsId,goodsCount:1})
			switching = false
			// this.getlocalStorage()
		},
		substrict(resobj){
			let subArr = getItem()
			for(var i=0;i<subArr.length;i++){
				if(subArr[i].goodsId == resobj.goodsId){
					if(subArr[i].goodsCount == 1){
						subArr.splice(i,1)
					}else{
						subArr[i].goodsCount = subArr[i].goodsCount-1
					}
					break	
				}
			}
			localStorage.setItem('goods',JSON.stringify(subArr))
			switching = false
			// this.getlocalStorage()
		},
		getlocalStorage(){
			var goodsArr=getItem()
			if(!goodsArr.length){
				this.isShow = true
				return
			}
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
			// console.log(goodsObj)
			// console.log(ids)
			var url='http://localhost:1888/api/goods/getshopcarlist/'+ids
			this.$http.get(url).then(res=>{
				res.body.message.forEach(item=>{
					item.thumb_path='http://ofv795nmp.bkt.clouddn.com/'+item.thumb_path
					item.count=goodsObj[item.id]
					if(switching){
						this.values.push(false) //初始化switch默认值
					}
				})
				this.shopcarLists=res.body.message
			},res=>{
				console.log('发生异常')
			})
		},
		getTotalPrice(){
			var _this=this
			_this.totalPrice = 0
			_this.values.forEach(function(item,index){
				if(item){
					_this.totalPrice += _this.shopcarLists[index]['count'] * _this.shopcarLists[index]['sell_price']
				}
			})
		},
		del(id){
			// this.shopcarLists.forEach((item,i)=>{
			// 	if(item.id == id){
			// 		this.shopcarLists.splice(i,1)
			// 	}
			// })
			var newArr2=getItem()
			for(var i=0;i<newArr2.length;i++){
				if(newArr2[i].goodsId == id){
					newArr2.splice(i,1)
					i--
				}
			}
			localStorage.setItem('goods',JSON.stringify(newArr2))
			var newArr1=this.shopcarLists
			newArr1.forEach((item,i)=>{
				if(item.id == id){
					this.goshop(-item.count)
					this.values.splice(i,1)
					this.currentView='number1'
					newArr1.splice(i,1)
				}
			})
		},
		// 结算
		tosettemt(){
			//1.0 判断是否有选择至少一个商品
			let newarr= this.values.filter(c=>c ==true);
			if(newarr.length==0){
				Toast('请至少选择一个商品');
				return;
			}

			//2.0 判断是否有登录
			let userid = getUserId();
			if(!userid){
				//应该跳转到登录组件
				this.$router.push({name:'login'});
			}else{
				//跳转到订单页面
				this.$router.push({name:'setorder'});
			}
		},
	},
	computed:{
		selectgoods:function(){
			var valfilterArr=this.values.filter(item=>item==true)
			this.getTotalPrice()
			return valfilterArr.length
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