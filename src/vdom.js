class VNode{
  constructor (tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
  }
}

function createElement (tagName, props, children) {
  return new VNode(tagName, props, children)
}

function renderDom (origin, target) {
  let { tagName, props, children } = origin
  let dom = document.createElement(tagName)
  for (let prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (prop === 'style') {
        dom.style.cssText = props[prop]
      }
      else {
        dom.setAttribute(prop, props[prop])
      }
    }
  }
  if (Array.isArray(children)) {
    children.forEach(item => {
      if (item instanceof VNode) {
        return renderDom(item, dom)
      }
      else {
        dom.appendChild(item)
      }
    })
  }
  else {
    if (typeof children === 'string') {
      let textNode = document.createTextNode(children)
      dom.appendChild(textNode)
    }
  }
  target.appendChild(dom)
}

export {
  createElement,
  renderDom
}