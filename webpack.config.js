module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.html$/, loader: 'riotjs' },
            { test: /\.js$/, loader: 'eslint!source-map' },
        ],
        loaders: [
            { test: /\.md$/, loader: 'html!markdown'},
            { test: /\.html$|\.js$/, loader: 'babel', query: { presets: 'es2015-riot' }},
            { test: /\.less$/, loader: 'style!css!less'},
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    }
}
