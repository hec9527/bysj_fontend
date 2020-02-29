import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: {
            userToken: undefined
        },
        search: {
            keyWords: '',
            data: []
        }
    },

    // 异步操作使用action，异步结束在action中调用commit执行mutation
    actions: {},

    // vuex中用于修改state 的方式
    mutations: {
        UPDATE_SEARCH_RESULT(state, payload) {
            state.search = payload;
        }
    }
});
