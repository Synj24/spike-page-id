# Spike Page ID

[![npm](https://img.shields.io/npm/v/spike-page-id.svg?style=flat-square)](https://npmjs.com/package/spike-page-id)
[![tests](https://img.shields.io/travis/static-dev/spike-page-id.svg?style=flat-square)](https://travis-ci.org/static-dev/spike-page-id?branch=master)
[![dependencies](https://img.shields.io/david/static-dev/spike-page-id.svg?style=flat-square)](https://david-dm.org/static-dev/spike-page-id)
[![coverage](https://img.shields.io/coveralls/static-dev/spike-page-id.svg?style=flat-square)](https://coveralls.io/r/static-dev/spike-page-id?branch=master)

Generates a css-friendly page identifier from a webpack loader context

> **Note:** This project is in early development, and versioning is a little different. [Read this](http://markup.im/#q4_cRZ1Q) for more details.


### Installation

`npm install spike-page-id -S`

> **Note:** This project is compatible with node v6+ only

### Usage

In your spike config:

```js
const htmlStandards = require('reshape-standard')
const pageId = require('spike-page-id')

module.exports = {
  // other config…
  reshape: (ctx) => {
    return htmlStandards({
      locals: { pageId: pageId(ctx) }
    })
  }
}
```

Now in your html, let's say it's called `index.sgr`:

```
html
  head
    title My page
  body(id='{{ pageId }}')
    p hello world
```

This will render something like:

```html
<html>
  <head>
    <title>My page</title>
  </head>
  <body id='index'>
    <p>hello world</p>
  </body>
</html>
```

If you are working with a page that's nested inside other folders, it will include all folders relative to the project root, separated by a hyphen. So for example:

- `views/index.sgr` > `index`
- `views/posts/welcome.sgr` > `posts-welcome`

…and that's about it!

### License & Contributing

- Details on the license [can be found here](LICENSE.md)
- Details on running tests and contributing [can be found here](contributing.md)
