import Vue from 'vue';
import vuex from 'vuex';
import { get } from '../API/get';

Vue.use(vuex);

const store = new vuex.Store({
    state: {
        theme: 'default',
        userToken: undefined,
        userInfo: {}
    },

    mutations: {
        SEARCH_KEYWORDS(state, keyworld) {
            state.keyworld = keyworld;
        },
        LOGIN_OUT(state) {
            state.userToken = undefined;
        }
    },
    actions: {
        SEARCH_KEYWORDS({ commit }, keyworld) {
            // commit('SEARCH_KEYWORDS', get.searchKeyWord(keyworld));
            const res = get.searchKeyWord(keyworld);
            commit('SEARCH_KEYWORDS', res);
        }
    }
});

export default store;
