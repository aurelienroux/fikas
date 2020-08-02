export const state = () => ({
  activeFilter: 'all'
})

export const mutations = {
  changeFilter(state, filter) {
    state.activeFilter = filter
  }
}
