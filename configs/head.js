module.exports = {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href:
        'https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Karla:wght@400;700&family=Rubik:wght@400;700&display=swap'
    }
  ]
}
