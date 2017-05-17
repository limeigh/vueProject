<template>
	<div class="tmpl">
		<div class="submititle">
			提交评论
		</div>
		<div class="submitarea">
			<textarea class="textarea" placeholder="请输入评论内容" ref="postcontent"></textarea>
			<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
		</div>
		<div class="commentitle">
			评论列表
		</div>
		<div class="commentlist">
			<div class="outwarp" v-for="item in comments">
				<div class="content" v-text="item.content"></div>
				<div class="user" v-text="item.user_name"></div>
				<div class="time">{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</div>
			</div>
			<!-- <div class="outwarp">
				<div class="content">这是一条评</div>
				<div class="user">dhq</div>
				<div class="time">2017-05-18</div>
			</div> -->
		</div>
		<!-- 加载更多按钮 -->
		<mt-button class="more" type="danger" size="large" plain @click="getmore">加载更多</mt-button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				comments:[],
				pageindex:1
			}
		},
		created(){
			console.log(this.pageindex)
			this.getcomment(this.pageindex)
		},
		methods:{
			//提交评论
			postcomment(){
				var contentText=this.$refs.postcontent.value
				if(!contentText || contentText.trim().length<=0){
					this.$toast('评论内容必须填写')
					return
				}
				var url='http://localhost:1888/api/postcomment/'+this.artid
				this.$http.post(url,{content:contentText},{emulateJSON:true}).then(res=>{
					this.$toast('评论提交成功!')
					this.comments=[]
					this.pageindex=1
					this.getcomment(this.pageindex)
					this.$refs.postcontent.value = ''
				},res=>{
					console.log('发生异常')
				})
			},
			// 获取评论
			getcomment(pageindex){
				var url='http://localhost:1888/api/getcomments/'+this.artid+'?pageindex='+pageindex
				this.$http.get(url).then(res=>{
					// this.comments=res.body.message
					this.comments=this.comments.concat(res.body.message)
				},res=>{
					console.log('发生异常')
				})
			},
			getmore(){
				this.pageindex++
				this.getcomment(this.pageindex)
			}
		},
		props:['artid']
	}
</script>

<style scoped>
	.more{
		margin-top: 10px
	}
	.tmpl{
		padding: 5px;
		margin-bottom: 100px;
	}
	.submititle,.commentitle{
		font-weight: 700;
		font-size: 21px;
		border-bottom: 1px solid rgba(92,92,92,0.4);
		padding-bottom: 15px; 
	}
	.textarea{
		margin-top: 5px;
	}
	.commentitle{
		margin-top: 10px;
		border-top: 1px solid rgba(92,92,92,0.4);
		padding: 10px 0;
	}
	.outwarp{
		border-bottom: 1px solid rgba(92,92,92,0.4);
		overflow: hidden;
		padding: 5px;
	}
	.content{
		max-height: 100px;
		overflow: auto;
	}
	.user{
		float: left;
		color: #0094ff;
	}
	.time{
		float: right;
		color: rgba(92,92,92,0.6)
	}
</style>