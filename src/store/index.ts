/*
 * @Author: gm.chen
 * @Date: 2021-05-02 22:35:41
 * @LastEditors: gm.chen
 * @LastEditTime: 2021-05-02 22:35:41
 * @Description: file content
 * @FilePath: /vue3-demo/src/store/index.ts
 */
import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

// Create a new store instance.
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count++
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})
