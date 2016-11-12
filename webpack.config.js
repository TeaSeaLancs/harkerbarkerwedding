const path = require('path');
const webpack = require('webpack');


const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'bin')
};

const plugins = [];

if (process.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                // suppresses warnings, usually from module minification
                warnings: false
            }
        }));
}

module.exports = {
    entry: {
        admin: path.join(PATHS.src, 'admin', 'browser.jsx'),
        main: path.join(PATHS.src, 'main', 'browser.jsx')
    },
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
    resolve: {
        extensions: ["", ".jsx", ".js"]
    },
    plugins,
    module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: [
                    'style', 
                    'css?modules&url=false&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1', 
                    'postcss-loader'
                ],
				include: PATHS.src
			},
			{
				test: /\.jsx?$/,
				loader: 'babel?cacheDirectory',
                include: PATHS.src
			},
            {
                test: /\.(jpe?g|png)$/i,
                loaders: ['file-loader']
            }
		]
	},
    postcss: [ require('autoprefixer')({browsers: ['last 2 versions']}) ]
};
