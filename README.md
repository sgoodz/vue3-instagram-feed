# Vue 3 Instagram Feed/Gallery

![MIT](https://img.shields.io/badge/license-MIT-green)
![v0.1.2](https://img.shields.io/badge/release-v0.1.2-blue)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A Vue 3 component that displays a basic Instagram feed using Instagram Basic Graph API and your Facebook access token.

**_Important:_** This only works with Vue 3 as I am using the composition API. You also need to generate an Instagram Access Token from the Meta Developer Portal.

## Installation

```bash
yarn add vue3-instagram-feed

OR

npm install vue3-instagram-feed
```

## Usage

To display a simple gallery with a set number of images.

Props:

- `accessToken`: Required.
- `count`: Required. Defines the number of images.
- `pagination`: Optional. Takes a boolean.

```html
<template>
  <InstagramFeed
    :count="12"
    accessToken="<your token here>"
    :pagination="true"
  />
</template>
```

### Main.js

```js
import { createApp } from "vue";
import App from "./App.vue";

import InstagramFeed from "vue3-instagram-feed";
import "vue3-instagram-feed/dist/style.css";

createApp(App).use(InstagramFeed).mount("#app");
```

## Styling

`vue3-instagram-feed` includes default styling (`dist/styles.css`) with that you can use as a base to create your own CSS.
All the component's elements are inside a `div` which acts a wrapper for the icons and the input.

The styles are as shown below, you can ovveride them as you wish.

```css
.instagram-wrapper {
  max-width: 93.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.instagram-gallery {
  display: flex;
  flex-wrap: wrap;
  margin: -1rem, -1rem;
  padding-bottom: 3rem;
}
.instagram-gallery-item {
  position: relative;
  flex: 1 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
}
.instagram-gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
