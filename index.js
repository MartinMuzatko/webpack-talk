import html from './README.md'
import './less/main.less'
import riot from 'riot'
import './js/tags/app.html'
import './js/tags/loader.html'

import marked from 'marked'
marked.Renderer()

document.body.innerHTML = `<app>${html}</app>`

riot.mount('*')
