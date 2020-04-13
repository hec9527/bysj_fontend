import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: {
            userToken: undefined
        },
        searchInfo: {
            total: 0, // 总共
            count: 0, // 偏移
            kw: '', // 查询关键字
            data: [], // 数据
            len: 30 // 分页大小30
        },
        categoryInfo: {
            total: 0, // 总共数量
            count: 0, // 偏移量
            category: '', // 分类名称
            data: [], // 数据源
            len: 30 // 分页大小
        },
        allCategory: [] // 图片的分类信息
    },

    // 异步操作使用action，异步结束在action中调用commit执行mutation
    actions: {},

    // vuex中用于修改state 的方式
    mutations: {
        // 更新所有图片分类
        UPDATE_ALL_CATEGORY(state, payload) {
            state.allCategory = payload;
        },
        // 分类页面
        UPDATE_CATEGORY_RESULT(state, payload) {
            state.categoryInfo = {
                total: payload.total,
                count: payload.count,
                category: payload.category,
                data: state.categoryInfo.data.concat(payload.data),
                len: state.categoryInfo.len
            };
        },
        UPDATE_CATEGORY_INFO(state, payload) {
            state.categoryInfo = {
                total: 0, // 总共数量
                count: 0, // 偏移量
                category: payload, // 分类名称
                data: [], // 数据源
                len: 30 // 分页大小
            };
        },
        // 首页查询
        UPDATE_SEARCH_RESULT(state, payload) {
            state.searchInfo = {
                kw: payload.kw,
                total: payload.total,
                count: payload.count,
                data: state.searchInfo.data.concat(payload.data),
                len: state.searchInfo.len
            };
        },
        UPDATE_SEARCH_INFO(state, payload) {
            state.searchInfo = {
                total: 0,
                count: 0,
                kw: payload,
                data: [],
                len: 30
            };
        }
    },

    // 相当于 computed 响应式更新
    getters: {
        getSearchInfo(state) {
            return state.searchInfo;
        },
        getAllCategory(state) {
            return state.allCategory;
        },
        getCategoryInfo(state) {
            return state.categoryInfo;
        },
        getCurrentCategory(state) {
            return state.categoryInfo.category;
        }
    }
});
