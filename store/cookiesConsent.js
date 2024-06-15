export const state = () => ({
  displayCookiesConsentFromStore: true
})

export const mutations = {
  setDisplayCookiesConsentFromStore(state) {
    state.displayCookiesConsentFromStore = false
  }
}
