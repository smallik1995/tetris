import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import createLogger from '../../node_modules/vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    strict: debug,
    plugins: debug ? [createLogger()] : [],
})
