<template>
	<div class="numbertmpl">
		<span class="left" @click="substrict">-</span>
		<span class="middle">{{count}}</span>
		<span class="right" @click="add">+</span>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				count:1
			}
		},
		methods:{
			add(){
				this.count++
				this.notiflycount()
			},
			substrict(){
				if(this.count<=1){
					this.count=1
					return
				}
				this.count--
				this.notiflycount()
			},
			notiflycount(){
				let key="count"
				this.$emit(key,this.count)
			}
		}
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