# Intro to frontend automation

Webpack can do a lot of stuff.
Not only does webpack **transpile**, **compile** and **preprocess** your source and then bundle them. It is also capable of helping you to code more accurately and also faster with **Linting**, **Sourcemaps** and **Dev Server**.

## How does one tool do all that?

![webpack](https://webpack.github.io/assets/what-is-webpack.png)


### Preprocessing/Transpiling/Templating
- JS
    - Coffeescript
    - Typescript
    - Babel (ES6)
- CSS
    - Less
    - Sass/Scss
    - Stylus
    - Postcss (Autoprefixer)
- HTML
    - Yade
    - HAML
    - Mustache/Handlebars
    - Smarty
    - Markdown
    - Riot


### Dependency management
- require('marked')
- import marked from 'marked'

### Optimizing
- minify
- fallback (rgba > hex)

### Tools
- Sourcemaps
- Devserver - Auto reload
- Linting

### Bundling
Webpack bundles all dynamic assets together into one distributable file. Or, if you want to, you can split the app in more than one part.

### Dependency management
    What is a Module (Anything really - js/html/css/md, etc)
    Loading modules - Webpack loader chains (style!css!less)
        Formats
        Preloaders, Postloaders
    Plugins extend loaders ()
    JS module formats
