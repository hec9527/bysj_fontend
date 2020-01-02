import Vue from 'vue';
import vuex from 'vuex';
import { get } from '../API/get';

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
        theme: 'default',
        userToken: undefined,
        userInfo: {}
    },

    mutations: {
        SEARCH_KEYWORDS(state, keyworld) {
            state.keyworld = keyworld;
            console.log(state);
        },
        LOGIN_OUT(state) {
            state.userToken = undefined;
        }
    },
    actions: {
        SEARCH_KEYWORDS(context) {
            console.log(context);

            return new Promise(async (resolve, reject) => {
                const res = await get.searchKeyWord();
                if (res) {
                    resolve(res);
                } else {
                    reject(res);
                }
            });
        }
    }
});
