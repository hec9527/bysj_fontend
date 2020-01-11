<template>
    <div id="app">
        <div class="theme" v-bind:class="themeBackground"></div>
        <div id="nav" class="animation fead-down">
            <router-link class="nav-items" to="/home">首页</router-link>
            <router-link class="nav-items" to="/category">分类</router-link>
            <router-link class="nav-items" to="/bing">必应美图</router-link>
            <router-link class="nav-items" to="/daily">每日英语</router-link>
            <router-link class="nav-items" to="/indi">个人中心</router-link>
        </div>
        <router-view class="routerView"></router-view>
    </div>
</template>

<script>
// import store from './store/index';

export default {
    data() {
        return {
            themeBackground: 'theme-bg'
        };
    }
};
</script>
