const path = require('path');

const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'bin')
};

module.exports = {
    entry: {
        admin: path.join(PATHS.src, 'admin', 'browser.jsx')
    },
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
    resolve: {
        extensions: ["", ".jsx", ".js"]
    },
    /*plugins: [ // Disabled for now but jesus seriously, this reduces the size of the build by 2/3rds
        // Minify the bundle
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            // suppresses warnings, usually from module minification
            warnings: false,
          }
        }),
    ],*/
    module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css?modules&url=false&localIdentName=[name]__[local]___[hash:base64:5]'],
				include: PATHS.src
			},
			{
				test: /\.jsx?$/,
				loader: 'babel?cacheDirectory',
                include: PATHS.src
			}
		]
	}
};
