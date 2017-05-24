<template>
	<div class="numbertmpl">
		<span class="left" @click="substrict">-</span>
		<span class="middle">{{resObj.count}}</span>
		<span class="right" @click="add">+</span>
	</div>
</template>

<script>
	const ADD = 'add'
	const SUBSTRICT = 'substrict'
	export default{
		data(){
			return {
				resObj:{type:ADD,goodsId:0,count:0}
			}
		},
		created(){
			this.resObj.count=this.numberCount>1?this.numberCount:1
			this.resObj.goodsId=this.numberId>0?this.numberId:0
		},
		methods:{
			add(){
				this.resObj.count++
				this.resObj.type=ADD
				this.notiflycount(this.resObj)
			},
			substrict(){
				if(this.resObj.count<=1){
					this.resObj.count=1
					return
				}
				this.resObj.count--
				this.resObj.type=SUBSTRICT
				this.notiflycount(this.resObj)
			},
			notiflycount(resobj){
				let key="count"
				this.$emit(key,resobj)
			}
		},
		props:['numberCount','numberId']
	}
</script>

<style scoped>
	.numbertmpl{
		display: inline;
	}
	.numbertmpl span{
		display: inline-block;
		padding: 5px;
		border:1px solid rgba(92,92,92,0.3);
	}
	.numbertmpl .left,.numbertmpl .middle,.numbertmpl .right{
		width: 30px;
		height: 25px;
		line-height: 13px;
		text-align: center;
		margin-bottom: 10px;
	}
	.numbertmpl .middle{
		width: 50px;
	}
</style>