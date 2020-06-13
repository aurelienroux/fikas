module.exports = {
  locales: [
    { code: 'en', iso: 'en-US' },
    { code: 'fr', iso: 'fr-FR' }
  ],
  defaultLocale: 'fr',
  strategy: 'prefix',
  seo: true,
  baseUrl: process.env.BASE_URL,
  vueI18n: {
    fallbackLocale: 'fr',
    messages: {
      en: require('../locales/en.json'),
      fr: require('../locales/fr.json')
    }
  }
}
