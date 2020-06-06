export const menuEnum = {
  home: 'home',
  about: 'about',
  prog: 'prog',
  contact: 'contact'
}

export const state = () => ({
  currentMenuLink: 'home'
})

export const mutations = {
  changeMenu(state, link) {
    state.currentMenuLink = link
  }
}
