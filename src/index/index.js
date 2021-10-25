// let config = {
//     entry:'./src/home/index.js',
//     output:{
//         filename:'home/helloworld.js',
//         path:'/docs'
//     }
// }
// function Webpack(config){
//     this.config = config;
// }
// Webpack.prototype.compile = function(){
//     let { entry,output } = this.config;
//     let { filename,path } = output;
//     let [dir,file] = filename.split('/');
//     var str = `t// 将${entry}中的代码打包到${path}/${dir}/文件夹中，
//     //文件名称叫${file}`
//     console.log(str)
// }
// const webpack = new Webpack(config);
// webpack.compile();

let config= {
    entry:{
        home:'./src/home/home.js',
        index:'./src/index/index.js',
    },
    output:{
        filename:'[name].[contenthash].js',
        path:'/docs'
    }
}
//作业二：
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，文件名称叫home.jfkasldfjklas.js
function Webpack(config){
    this.config = config;
}
Webpack.prototype.compile = function(){
    let {entry,output}=this.config;
    if( typeof entry == 'object'){
        for (const key in entry) {
            var random=parseInt(Math.random()*89999+10000)
            console.log(`将${entry[key]}中的代码打包到${output.path}/${key}文件夹中，文件名称叫${key}.${random}.js`)
        }
    }
}
const webpack = new Webpack(config);
webpack.compile();
