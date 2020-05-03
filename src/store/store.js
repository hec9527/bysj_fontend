import vue from 'vue';
import vuex from 'vuex';
import {} from '../tools/util';

vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: {
            all: {},
            basic: {
                userToken: undefined,
                userName: undefined
            }
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
        allCategory: [], // 图片的分类信息
        bingDaily: [], // 必应美图的每日图片信息
        englishDaily: {}, // 每日英语最新数据
        userList: [], // 用户列表
        systemLog: [], //系统日志信息
        systemConfig: {}
    },

    // 异步操作使用action，异步结束在action中调用commit执行mutation
    actions: {},

    // vuex中用于修改state 的方式
    mutations: {
        // 获取系统的配置文件
        FETCH_SERVER_CONFIG(state, payload) {
            state.systemConfig = payload;
        },
        // 获取所有系统日志成功
        FETCH_SYSTEM_LOG(state, payload) {
            state.systemLog = payload;
        },
        // 管理员获取所有用户信息
        UPDATE_USER_LIST(state, payload) {
            state.userList = payload;
        },
        // 更新当前登录用户信息
        UPDATE_USER_INFO(state, payload) {
            state.userInfo.basic = {
                userToken: payload.token,
                userName: payload.userName || this.state.userInfo.basic.userName
            };
        },
        UPDATE_USER_INFO_ALL(state, payload) {
            state.userInfo.all = { ...payload };
        },
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
        },
        // 必应最近7日数据
        UPDATE_BINY_DAILY(state, payload) {
            state.bingDaily = payload;
        },
        // 每日英语最新数据
        UPDATE_DAILY_ENGLISH(state, payload) {
            state.englishDaily = payload;
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
        },
        getBingDaily(state) {
            return state.bingDaily;
        },
        getDailyEnglish(state) {
            return state.englishDaily;
        },
        getUserBasicInfo(state) {
            return state.userInfo.basic;
        },
        getUserAllInfo(state) {
            return state.userInfo.all;
        },
        getUserpermission(state) {
            return state.userInfo.all.permission;
        },
        getAllUserInfo(state) {
            return state.userList;
        },
        getSystemLog(state) {
            return state.systemLog;
        },
        getSystemConfig(state) {
            return state.systemConfig;
        }
    }
});
