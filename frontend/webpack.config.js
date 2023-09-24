const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/index.js",
        popup: "./src/popup.js",
        content: "./src/content.js",
        background: "./src/background.js",
        message: "./src/message.js"
    },
    mode: "production",
    module: {
        rules: [
            {
              test: /\.jsx?$/,
               use: [
                 {
                  loader: "babel-loader",
                  }],
               exclude: /node_modules/,
            },
            {
              exclude: /node_modules/,
              test: /\.css$/i,
               use: [
                  "style-loader",
                  "css-loader"
               ]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "manifest.json", to: "../manifest.json" },
            ],
        }),
        ...getHtmlPlugins(["index","popup"]),
    ],
    resolve: {
        extensions: [".tsx", ".jsx", ".ts", ".js"],
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        filename: "[name].js",
    },
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HTMLPlugin({
                title: "React extension",
                template: "index.html",
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}