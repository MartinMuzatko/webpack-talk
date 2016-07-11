# What is a loader?

A loader in the first place, makes sure that the resource is added the the main bundle.

## Anatomy of a Loader
`{ test: /\.less$/, loader: 'style!css!less'}`

Look for all files that end with `less`.

- Preprocess the files with [**less**](https://github.com/webpack/less-loader)
- turn them into [**css**](https://github.com/webpack/css-loader)
    - resolving `import` statements into `require`
    - performing css-level modifications (minimizing)
- bundle them as inline [**style**](https://github.com/webpack/style-loader).

There are three loaders here, because we have to tell Webpack, that we are going to use the result as style. We could also return it as string to our JS application if we'd like to.

Loaders can be chained, in order to pass a file through various processing steps.

## Timeslots

```js
module: {
    preLoaders: [],
    loaders: [],
    postLoaders: []
}
```
