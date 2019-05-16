module.exports = {
    entry: "./src/index.ts",
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use:{
                    loader: "ts-loader"
                }
            }
        ]
    }
};