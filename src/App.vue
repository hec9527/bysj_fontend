<template>
    <div id="app">
        <div class="theme" v-bind:class="themeBackground"></div>
        <div id="nav" class="animation fead-down">
            <router-link class="nav-items" to="/home">首页</router-link>
            <el-popover class="nav-items" placement="bottom" width="160" trigger="hover">
                <div class="category-wrap">
                    <div
                        class="image-category"
                        v-for="(item, index) in category"
                        :key="index"
                        @click="handleCategoryChange(item)"
                    >
                        {{ item }}
                    </div>
                </div>
                <router-link class="nav-items" slot="reference" to="/category">
                    <span @click="handleCategoryChange(category[0])"> 分类</span>
                </router-link>
            </el-popover>
            <router-link class="nav-items" to="/bing">必应美图</router-link>
            <router-link class="nav-items" to="/daily">每日英语</router-link>
            <router-link v-if="userBasicInfo.userToken" class="nav-items" to="/share">分享</router-link>
            <router-link v-if="userBasicInfo.userToken && userPermission === 0" class="nav-items" to="/manager">
                管理
            </router-link>
            <router-link class="nav-items" to="/indi">个人中心</router-link>
        </div>
        <router-view class="routerView"></router-view>
    </div>
</template>

<script>
import API from './API';
import { getUserInfo } from './tools/util';
import { mapGetters } from 'vuex';
import { Popover } from 'element-ui';

export default {
    data() {
        return {
            themeBackground: 'theme-bg'
        };
    },
    mounted() {
        console.log('App mounted');
        // eslint-disable-next-line no-unused-vars
        const { userName, token } = getUserInfo();
        this.$store.commit('UPDATE_USER_INFO', getUserInfo());
        API.fetchAllCategory().then(res => {
            this.$store.commit('UPDATE_ALL_CATEGORY', res.data);
        });
        token &&
            API.fetchUserInfoAll().then(
                res => {
                    this.$store.commit('UPDATE_USER_INFO_ALL', res.data);
                },
                () => {
                    this.$store.commit('UPDATE_USER_INFO_ALL', {});
                    this.$store.commit('UPDATE_USER_INFO', { token: undefined });
                }
            );
    },
    computed: {
        category: function() {
            return this.getAllCategory();
        },
        userBasicInfo: function() {
            return this.getUserBasicInfo();
        },
        userAllInfo: function() {
            return this.getUserAllInfo();
        },
        userPermission: function() {
            return this.getUserpermission();
        }
    },
    methods: {
        handleCategoryChange(item) {
            if (this.getCurrentCategory() !== item) {
                this.$store.commit('UPDATE_CATEGORY_INFO', item);
            }
            window.location.hash = '/category';
        },

        ...mapGetters([
            'getAllCategory',
            'getCurrentCategory',
            'getUserBasicInfo',
            'getUserAllInfo',
            'getUserpermission'
        ])
    },
    components: {
        elPopover: Popover
    },
    updated() {
        // console.log('用户权限：', this.userPermission);
    }
};
</script>

<style scoped>
.category-wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.category-wrap .image-category {
    font-size: 14px;
    margin-left: 7px;
    margin-bottom: 5px;
    cursor: pointer;
    color: #fff;
}
.category-wrap .image-category:hover {
    color: burlywood;
}
</style>

<style>
/* 强制覆盖popover 的默认样式 */
.el-popover.el-popper {
    /* border: 1px solid #abfc !important; */
    border: none !important;
    background: #abf3 !important;
    backdrop-filter: blur(10px) !important;
}
.el-popover.el-popper .popper__arrow,
.el-popover.el-popper .popper__arrow::after {
    border-bottom-color: #abf3 !important;
}
</style>
