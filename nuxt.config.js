export default {
  mode: 'universal',
  head: require('./configs/head'),
  css: require('./configs/css'),
  plugins: require('./configs/plugins'),
  buildModules: require('./configs/buildModules'),
  styleResources: require('./configs/styleResources'),
  modules: require('./configs/modules'),
  axios: require('./configs/axios'),
  build: require('./configs/build'),
  i18n: require('./configs/i18n')
}
