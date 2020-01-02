import Vue from 'vue';
import vuex from 'vuex';
import get from '../API/get';

Vue.use(vuex);

const store = new vuex.Store({
    state: {
        theme: 'default',
        userToken: undefined,
        userInfo: {},
        search: {
            keyworld: undefined,
            data: []
        }
    },

    mutations: {
        SEARCH_KEYWORDS(state, keyworld, data) {
            state.search.keyworld = keyworld;
            state.search.data = data;
        },

        LOGIN_OUT(state) {
            state.userToken = undefined;
        }
    },
    actions: {
        SEARCH_KEYWORDS({ commit }, keyworld) {
            commit('SEARCH_KEYWORDS', keyworld, get.getSearchKeyWord(keyworld));
        }
    }
});

export default store;
