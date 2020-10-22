import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {}

const mutations = {}

const actions = {}

const getters = {}

import home from '@/store/home'
import user from '@/store/user'
import search from '@/store/search'

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        user,
        search
    }
})