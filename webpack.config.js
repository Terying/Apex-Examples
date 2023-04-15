const path = require("path");   // node自带包
module.exports = {
    entry: "./src/index.ts",    // 打包对入口文件，期望打包对文件入口
    output: {
        filename: "index.js",   // 输出文件名称
        path: path.resolve(__dirname, "build") //获取输出路径
    },
    mode: "development",        // development/production 整个mode可以不要，模式是生产坏境就是压缩好对，这里配置开发坏境方便看生成的代码
    devtool: "source-map",      // 启用 source-map（source map最初是一个单独的文件，浏览器可以通过它还原出编译前的原始代码）
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.vs$/,
                use: "webpack-glsl-loader",
                exclude: /node_modules/
            },
            {
                test: /\.fs$/,
                use: "webpack-glsl-loader",
                exclude: /node_modules/
            },
            {
                test: /\.glsl$/,
                use: "webpack-glsl-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".vs", ".fs", ".glsl"] // 解析对文件格式
    }
};
