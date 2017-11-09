# DON'T USE THIS!

as per @dmarcos's suggestion:

you can listen for the `componentchanged` event. `cameraEl.addEventListener('componentchanged', function (evt) { var componentName = evt.detail.name; if (componentName === 'rotation' || componentName === 'position') { your code } });`

## aframe-camera-listener-component

[![Version](http://img.shields.io/npm/v/aframe-camera-listener-component.svg?style=flat-square)](https://npmjs.org/package/aframe-camera-listener-component)
[![License](http://img.shields.io/npm/l/aframe-camera-listener-component.svg?style=flat-square)](https://npmjs.org/package/aframe-camera-listener-component)

Listen to changes made to the camera and execute a function when a change happens

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-camera-listener-component/dist/aframe-camera-listener-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity camera-listener="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-camera-listener-component
```

Then require and use.

```js
require('aframe');
require('aframe-camera-listener-component');
```
