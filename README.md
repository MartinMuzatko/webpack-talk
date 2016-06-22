# Intro to frontend automation

Webpack can do a lot of stuff.
Not only does webpack **transpile**, **compile** and **preprocess** your source and then bundle them. It is also capable of helping you to code more accurately and also faster with **Linting**, **Sourcemaps** and **Dev Server**.

## How does one tool do all that?

![webpack](https://webpack.github.io/assets/what-is-webpack.png)


### Preprocessing/Transpiling
- JS
    - Coffeescript
    - Typescript
    - Babel (ES6)
- CSS
    - Less
    - Sass/Scss
    - Stylus

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
        Bundling everything together into one distributable file (or folder)

Dependency management
    What is a Module (Anything really - js/html/css/md, etc)
    Loading modules - Webpack loader chains (style!css!less)
        Formats
        Preloaders, Postloaders
    Plugins extend loaders ()
    JS module formats


Bonus Slides/Material:
    Comparing existing tools
    Q&A
