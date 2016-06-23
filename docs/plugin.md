# What is a plugin?

A [plugin](https://webpack.github.io/docs/list-of-plugins.html) can provide additional functionality as listed below.

Tasks like
 - Polyfilling
 - Additional dev servers
 - copying contentbases
 - Minifying and purifying (removing code that is never executed)
 - Image compression
 - Offline mode
 - Providing Plugins globally

## Implementing a plugin

Plugins have to be required.

```js

var BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    ...
    ...
    ...
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 8081,
                proxy: 'http://localhost:8080/'
            },
            {
                reload: true
            }
        )
    ]
}
```
