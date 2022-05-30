export default {
  namespaced: true,
  state: {
    showToast: false,
    toastMessage: '',
    toastAlertType: '',
  },
  getters: {
    toastMessageWithSmile(state) {
      return state.toastMessage + '^_^'
    }
  },
  mutations: {
    UPDATE_TOAST_MASSAGE(state, payload) {
      state.toastMessage = payload
    },
    UPDATE_TOAST_ALERT_TPYE(state, payload) {
      state.toastAlertType = payload
    },
    UPDATE_TOAST_STATUS(state, payload) {
      state.showToast = payload
    },
  },
  actions: {
    triggerToast({
      commit
    }, message, type) {
      commit('UPDATE_TOAST_MASSAGE', message)
      commit('UPDATE_TOAST_ALERT_TPYE', type)
      commit('UPDATE_TOAST_STATUS', true)
      setTimeout(() => {
        commit('UPDATE_TOAST_MASSAGE', '')
        commit('UPDATE_TOAST_ALERT_TPYE', '')
        commit('UPDATE_TOAST_STATUS', false)
      }, 5000)
    },
  },
}