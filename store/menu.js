export const state = () => ({
  currentMenuLink: 'home'
})

export const mutations = {
  changeMenu(state, link) {
    state.currentMenuLink = link
  }
}
