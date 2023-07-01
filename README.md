[![Netlify Status](https://api.netlify.com/api/v1/badges/c9d1bd95-06b8-4d54-80e0-e1fbdf56e74a/deploy-status)](https://app.netlify.com/sites/fikasfest/deploys)

# Fika(s)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Storyblok

### New page

Before creating a new page in Storyblok, you need to create its page template in project, so it can load its associated Storyblok story (see examples in `/pages/*`).

### Storyblok global components

Declare blok components in the plugin `plugins/globalComponents` so they can become available anywhere in the project. This will be necessary for nested bloks as they can appear anywhere depending on CMS data.

### Block data from Storyblok

In the component, passing blok props insure thats it will receive its Storyblok associated data from the CMS.

```js
props: {
  blok: {
    type: Object,
    default: () => {}
  }
}
```

And use in `template`

```html
<p>{{ block.content }}</p>
```

### Nested bloks/components

To insure nested components/bloks can get their data, pass them through with a `<component />` tag so every child blok can get access.

```js
<component
  :is="story.content.component"
  v-if="story.content.component"
  :key="story.content._uid"
  :blok="story.content"
></component>
```

### Storyblok RichField

Use a computed value to get a SB richfield value.

```js
computed: {
  richtext() {
    return this.blok.details
      ? this.$storyapi.richTextResolver.render(this.blok.details)
      : ''
  }
}
```

and pass it in a `v-html` tag in template

```html
<p v-html="richtext"></p>
```
