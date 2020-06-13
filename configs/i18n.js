module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'fr',
  strategy: 'prefix',
  vueI18n: {
    fallbackLocale: 'fr',
    messages: {
      en: require('../locales/en.json'),
      fr: require('../locales/fr.json')
    }
  }
}
