const path = require("path");



module.exports = {
    entry: "./app.js",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "build")
    },
    mode: "development",
    watch: true,

    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/build/",
        compress: true,
        port: 3001
    }



}

