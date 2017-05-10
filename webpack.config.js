var HtmlwebpackPlugin=require('html-webpack-plugin')
module.exports={
	entry:'./src/main.js',
	output:{
		path:__dirname+'/dist',
		filename:'build.js'
	},
	module:{
		loaders:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test:/\.(jpg|png|ttf)$/,
				loader:'url-loader?limit=40000'
			}
		]
	},
	plugins:[
		new HtmlwebpackPlugin({
			title:'vueProject',
			filename:'vueProject.html',
			template:'index.html'
		})
	]
}