# What is a loader?

A loader in the first place, makes sure that the resource is added the the main bundle.
- json
- javascript
- css
- html

## Anatomy of a Loader
<loader>{ test: /\.less$/, loader: 'style!css!less'}</loader>

Look for all files that end with `less`.

- Preprocess the files with [**less**](https://github.com/webpack/less-loader)
- turn them into [**css**](https://github.com/webpack/css-loader)
    - resolving `import` statements into `require`
    - performing css-level modifications (minimizing)
- bundle them as inline [**style**](https://github.com/webpack/style-loader).

There are three loaders here, because we have to tell Webpack, that we are going to use the result as style. We could also return it as string to our JS application if we'd like to.

Loaders can be chained, in order to pass a file through various processing steps.


```js
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
}
```

Loading modules - Webpack loader chains `style!css!less`
- Formats
- Preloaders, Postloaders

Example

```js
var webpack = require('webpack')

module.exports = {
    entry: './index.js',
    output: {
        path: './',
        filename: 'bundle.js',
        sourceMapFilename: "[name].js.map",
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
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    eslint: {
        configFile: './.eslintrc'
    },
    devtool: 'source-map'
}
```
