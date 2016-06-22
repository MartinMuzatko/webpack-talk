import html from './README.md'

import './less/main.less'
import riot from 'riot'
import './js/tags/app.html'

document.body.innerHTML = `<app>${html}</app>`

riot.mount('*')
