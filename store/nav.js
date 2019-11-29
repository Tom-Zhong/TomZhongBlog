export const state = () => ({
  nav: null
})
export const mutations = {
  setNav(state, nav) {
    state.nav = nav
  }
}
export const actions = {
  async getNav({ commit }) {
    let navData = null;
    return new Promise((resolve) => {
      setTimeout(() => {
        navData = [
          { 'name': '首页', 'url': '/' },
          { 'name': '博客', 'url': '/blog_home'} 
        ]
        commit('setNav', navData);
        resolve()
      }, 5000)
    })
  }
}
