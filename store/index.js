export const state = () => ({
  navDataFR: null,
  navDataEN: null
})

export const mutations = {
  setNavDataFR(state, navData) {
    state.navDataFR = navData
  },
  setNavDataEN(state, navData) {
    state.navDataEN = navData
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const responseFR = await context.app.$storyapi.get(
      `cdn/stories/navigation`,
      { version: 'draft' }
    )
    const responseEN = await context.app.$storyapi.get(
      `cdn/stories/en/navigation`,
      { version: 'draft' }
    )

    commit('setNavDataFR', responseFR.data.story.content)
    commit('setNavDataEN', responseEN.data.story.content)
  }
}
