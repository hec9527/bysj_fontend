<template>
    <div class="container">
        <!-- http://p0.qhimg.com/bdr/__30/t01c4bfcda5b171e04d.jpg -->
        <div class="content">
            <!-- 左侧 用户信息展示 -->
            <div class="aside">
                <userInfoBasic :changePage="this.changePage" />
            </div>
            <!-- 右侧 用户上传数据展示 -->
            <div class="main">
                <!-- 标题展示 -->
                <div class="box-title">个人分享</div>
                <userUploaded></userUploaded>
            </div>
        </div>
    </div>
</template>

<script>
import basicInfo from './userInfoBasic';
import userUploaded from './userUploadDate';
import { mapGetters } from 'vuex';

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
        userInfoBasic: basicInfo,
        userUploaded
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
}
.aside {
    position: relative;
    width: 300px;
}

.box-title {
    position: absolute;
    top: 0;
    width: 100%;
    height: 48px;
    border-radius: 4px;
    color: #666;
    background: #fff;
    font-size: 15px;
    line-height: 48px;
    font-family: 'Microsoft YaHei', 'Microsoft Sans Serif', 'Microsoft SanSerf', 微软雅黑;
    padding-left: 16px;
}
</style>
