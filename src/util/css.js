const css = [];

require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
    extensions: ['.css'],
    devMode: true,
    processCss: compiled => {
        css.push(compiled);
    }
});
    
module.exports = css;