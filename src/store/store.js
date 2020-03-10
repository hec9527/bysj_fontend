import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: {
            userToken: undefined
        },
        search: {
            total: 0, // 总共
            count: 0, // 偏移
            page: 30, // 分页
            kw: '', // 查询关键字
            data: [] // 数据
        }
    },

    // 异步操作使用action，异步结束在action中调用commit执行mutation
    actions: {},

    // vuex中用于修改state 的方式
    mutations: {
        UPDATE_SEARCH_RESULT(state, payload) {
            state.search = payload;
        }
    },

    // 相当于 computed 响应式更新
    getters: {
        getSearchInfo(state) {
            return state.search;
        }
    }
});
