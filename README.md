# Intro to frontend automation

Webpack can do a lot of stuff.
Not only does webpack **transpile**, **compile**, **preprocess** your modules and bundle them, it can also help you to code more accurately and also faster.

## How does one tool do all that?

If you are familiar with node and npm,

So what does webpack take care of?

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
