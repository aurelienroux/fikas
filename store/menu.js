export const state = () => ({
  currentMenuLink: 'home'
})

export const mutations = {
  change(state, link) {
    state.currentMenuLink = link
  }
}
