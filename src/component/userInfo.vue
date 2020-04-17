<template>
    <div class="container">
        <div class="content">
            <div class="aside">
                <userInfoBasic :changePage="this.changePage" />
            </div>
            <div class="main"></div>
        </div>
    </div>
</template>

<script>
import API from '../API/API';
import basicInfo from './userInfoBasic';
import { mapGetters } from 'vuex';
import { checklogin } from '../tools/util';
import { Notification } from 'element-ui';

export default {
    props: {
        changePage: {
            type: Function,
            required: true
        }
    },
    data: () => {
        return {};
    },
    mounted() {},
    computed: {
        userInfo: () => {
            const info = this.getUserBasicInfo();
            this.userName = info.userName;
            return info;
        }
    },
    components: {
        userInfoBasic: basicInfo
    },
    methods: {
        ...mapGetters(['getUserBasicInfo'])
    }
};
</script>

<style scoped>
.container {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 34px;
    display: flex;
    justify-content: center;
    background: #0004;
    align-items: center;
}
.content {
    position: absolute;
    top: 34px;
    width: 1000px;
    height: auto;
    min-height: 100vh;
    background: #fff9;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.main {
    position: relative;
    width: 700px;
    height: auto;
    box-sizing: border-box;
    margin: 8px 16px;
    border-radius: 4px;
    background: #fff;
}
.aside {
    position: relative;
    width: 300px;
}
</style>
