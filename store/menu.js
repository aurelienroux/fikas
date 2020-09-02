export const menuEnum = {
  home: 'home',
  about: 'about',
  prog: 'prog',
  contact: 'contact'
}

export const state = () => ({
  currentMenuLink: 'home',
  newsletterOpen: false
})

export const mutations = {
  changeMenu(state, link) {
    state.currentMenuLink = link
  },

  toggleNewsletter(state) {
    state.newsletterOpen = !state.newsletterOpen
  }
}
