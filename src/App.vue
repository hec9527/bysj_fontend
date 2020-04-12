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
            <router-link class="nav-items" to="/indi">个人中心</router-link>
        </div>
        <router-view class="routerView"></router-view>
    </div>
</template>

<script>
import API from './API/API';
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
        API.fetchAllCategory().then(res => {
            this.$store.commit('UPDATE_ALL_CATEGORY', res.data);
        });
    },
    computed: {
        category: function() {
            return this.getAllCategory();
        }
    },
    methods: {
        handleCategoryChange(item) {
            this.$store.commit('UPDATE_CATEGORY_INFO', item);
            window.location.hash = '/category';
        },
        ...mapGetters(['getAllCategory'])
    },
    components: {
        elPopover: Popover
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
