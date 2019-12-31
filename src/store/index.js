import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
        theme: 'default',
        userToken: undefined,
        userInfo: {}
    },

    mutations: {
        LOGIN_OUT(state) {
            state.userToken = undefined;
        }
    }
});
