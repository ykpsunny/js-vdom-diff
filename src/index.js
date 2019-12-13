import { createElement, renderDom } from './vdom'

let dom = createElement('ul', {class: 'wrapper', style: { width: '100px', height: '100px' }}, [createElement('li', {class: 'li'}, [createElement('input', {class: 'input', placeholder: 'hello world'})])])

console.log(dom)

renderDom(dom, document.getElementById('root'))
