type State = {
  mobileMenuActive?: Boolean
}

export const state = (): State => ({
  mobileMenuActive: false,
})

export const mutations = {
  set(state: State, mobileMenuActive: Boolean) {
    state.mobileMenuActive = mobileMenuActive
  },
}
