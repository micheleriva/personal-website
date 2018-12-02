import Vuex from 'vuex'
import * as TYPES from './mutation-types'

export default function () {
  return new Vuex.Store({

    state: () => ({
      rotator: 0
    }),

    getters: {
      getCurrentRotatorWord: (state) => state.rotator
    },

    mutations: {
      updateHomeRotator (state, data) {
        return state.rotator = data
      }
    }

  })
}