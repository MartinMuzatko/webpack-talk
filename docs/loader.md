# What is a loader?

A loader in the first place, makes sure that the resource is added the the main bundle.
- json
- javascript
- css
- html

## Anatomy of a Loader

<test></test>
```js
{ test: /\.less$/, loader: 'style!css!less'},
```
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
