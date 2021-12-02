

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        view: 'No1On',
        url: '',
        hurl: ''
    },
    getters: {
        getView: state => {
            return state.view;
        },
        getUrl: state => {
            return state.url;
        },
        getHurl: state => {
            return state.hurl;
        },
    },
    mutations: {
        SET_VIEW: (state, payload) => {
            state.view = payload;
        },
        SET_URL: (state, payload) => {
            state.url = payload;
        },
        SET_HURL: (state, payload) => {
            state.hurl = payload;
        },
    }
});