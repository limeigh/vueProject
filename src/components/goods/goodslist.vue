<template>
	<div class="tmpl">
		<ul class="mui-table-view mui-grid-view">
	        <!-- <li class="mui-table-view-cell mui-media mui-col-xs-6">
	            <a href="#">
	                <img class="mui-media-object" src="https://pic.hiweixiu.com/images/uploadImg/banner/201705/20170508171912_320.png">	            
	            </a>
	            <div class="desc">
	            	<h5>title</h5>
	            	<div class="box">
	            		<h6><span>$2195</span><s>$2499</s></h6>
	            		<div class="sell">
	            			<p class="topsell">热卖中</p>
	            			<p class="count">剩余60件</p>
	            		</div>
	            	</div>
	            </div>
	        </li> -->
	        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in goodslist">
	            <router-link v-bind='{to:"/goods/goodsInfo/"+item.id}'>
	                <img class="mui-media-object" :src="item.img_url">	            
	            </router-link>
	            <div class="desc">
	            	<h5>{{item.title}}</h5>
	            	<div class="box">
	            		<h6><span>${{item.sell_price}}</span><s>${{item.market_price}}</s></h6>
	            		<div class="sell">
	            			<p class="topsell">热卖中</p>
	            			<p class="count">剩余{{item.stock_quantity}}件</p>
	            		</div>
	            	</div>
	            </div>
	        </li>
	    </ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				goodslist:[]
			}
		},
		created(){
			this.getgoodslist(1)
		},
		methods:{
			getgoodslist(pageindex){
				var url='http://localhost:1888/api/getgoods?pageindex='+pageindex
				this.$http.get(url).then(res=>{
					this.goodslist = res.body.message
				},res=>{
					console.log('发生异常')
				})
			}
		}
	}
</script>


<style scoped>
	.mui-table-view.mui-grid-view .mui-table-view-cell{
		padding:10px 0 0 10px;
		border:1px solid rgba(92,92,92,0.4); 
		margin-bottom: 4px;
		margin-left: 4px;
		box-shadow: 0 0 4px #666;
	}
	.desc h5{
	    color:#000;
	    text-align: left;
	    font-size:12px;
	    font-family: '微软雅黑';
	    font-weight: bold;
	    height: 24px;
	    overflow-y:auto;
	}
	.desc .box{
	    height: 60px;
	    background-color: rgba(92,92,92,0.1);
	    margin: 0;
	    padding: 5px;
	}
	.desc .box h6{
	    text-align: left;
	}
	.desc .box h6 span{
	    color:red;
	    font-size: 14px;
	    margin-right: 15px;
	}
	.sell{
	    margin-top: 15px;
	}
	.sell p{
		font-size: 12px;
		color: rgba(92,92,92,0.8);
	}
	.sell .topsell{
	    float: left;
	    width: 40%;
	    text-align: left;
	}
	.sell .count{
	    float: right;
	    width: 55%;
	    text-align: right;
	}
</style>