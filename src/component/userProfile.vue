<template>
    <div class="container">
        <!-- 用户头像和背景 -->
        <div class="user-background" @click="editUserBackground">
            <div class="user-avator-wrap">
                <div class="user-avator">
                    <i v-if="!userInfo.avator" class="el-icon-user-solid"></i>
                    <!-- 用户头像绑定到此处作为背景 -->
                    <div v-if="userInfo.avator" class="user-avator-img"></div>
                </div>
            </div>
        </div>

        <!-- 用户基础信息 -->
        <div class="user-profile">
            <!-- 用户操作 -->
            <div class="user-operater">
                <div class="btns">
                    <div class="btn" @click="showBtns = !showBtns">
                        <i class="el-icon-more"></i>
                    </div>
                    <div v-if="showBtns" class="op-btns">
                        <div class="items" @click.stop="editInfo">信息</div>
                        <div class="items" @click.stop="fllow">关注</div>
                        <div class="items" @click.stop="fans">粉丝</div>
                        <!-- <div class="items" @click.stop="away">注销</div> -->
                        <div class="items" @click.stop="logout">退出</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 用户信息展示 -->
        <div class="user-interaction-data">
            <div class="content">
                <div class="user-name">{{ userInfo.name }}</div>
                <!-- <div class="div">{{ userInfo }}</div> -->
                <div class="user-interaction-wrap">
                    <!-- 下载 -->
                    <div class="download" title="下载次数">
                        <i class="el-icon-download"></i>
                        <span>20</span>
                    </div>
                    <!-- 上传 -->
                    <div class="upload" title="上传次数">
                        <i class="el-icon-upload2"></i>
                        <span>23</span>
                    </div>
                    <!-- 点赞 -->
                    <div class="support" title="点赞次数">
                        <i class="el-icon-thumb"></i>
                        <span>43</span>
                    </div>
                    <!-- 评论 -->
                    <div class="remark" titie="评论次数">
                        <i class="el-icon-chat-dot-round"></i>
                        <span>12</span>
                    </div>
                    <!-- 等级 -->
                    <div class="level" title="等级">
                        <i class="el-icon-s-flag"></i>
                        <span>4</span>
                    </div>
                    <!-- 积分 -->
                    <div class="integral" title="积分">
                        <i class="el-icon-attract"></i>
                        <span>24</span>
                    </div>
                    <!-- 收藏 -->
                    <div class="collection" title="收藏">
                        <i class="el-icon-star-on"></i>
                        <span>6</span>
                    </div>
                    <!-- 消息 -->
                    <div class="message" title="消息">
                        <i class="el-icon-message-solid"></i>
                        <span>545</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 看板娘 -->
        <div class="watcher">
            <live2d />
        </div>
    </div>
</template>

<script>
import { delUserInfo } from '../tools/util';
import { Notification } from 'element-ui';
import API from '../API';
import { mapGetters } from 'vuex';
import live2d from '../component/live2d.vue';

export default {
    props: {
        changePage: {
            type: Function,
            required: true
        }
    },
    data: () => {
        return {
            showBtns: false,
            bgUserDefault: '../assets/image/bg-user.jpg'
        };
    },
    mounted() {},
    methods: {
        fetchUserInfoAll() {
            API.fetchUserInfoAll().then(
                res => this.$store.commit('UPDATE_USER_INFO_ALL', res.data),
                rej => console.log(rej)
            );
        },
        // 编辑个人信息
        editInfo() {
            //
        },
        // 关注者
        fllow() {
            Notification.info('功能正在开发中');
        },
        // 粉丝
        fans() {
            Notification.info('功能正在开发中');
        },
        // 注销账号
        away() {
            Notification.info('功能正在开发中');
        },
        // 退出登录
        logout() {
            delUserInfo();
            this.$store.commit('UPDATE_USER_INFO', { userName: undefined, userToken: undefined });
            this.changePage('login');
            Notification.success('退出登录');
        },
        // 编辑用户背景墙
        editUserBackground() {
            //
        },
        ...mapGetters(['getUserAllInfo'])
    },
    computed: {
        userInfo: function() {
            return this.getUserAllInfo();
        }
    },
    components: {
        live2d
    }
};
</script>

<style scoped>
.container {
    height: auto;
    overflow-y: auto;
}
.user-background {
    cursor: pointer;
    position: relative;
    width: 100%;
    min-height: 350px;
    background: #abf3;
    background-image: url('../assets/image/bg-user.jpg');
    background-position: center;
    background-size: 100% auto;
}
.user-avator-wrap {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    z-index: 10;
    cursor: pointer;
}
.user-avator {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 100%;
    overflow: hidden;
    background: rgb(64, 110, 168);
    display: flex;
    justify-content: center;
    align-items: center;
}
.user-avator i {
    font-size: 48px;
    color: #ccc;
}
.user-avator-img {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #fff0;
    background-position: center;
    background-size: 100% 100%;
}
.user-profile {
    position: relative;
}
.user-operater {
    position: absolute;
    top: -25px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
}
.user-operater .btns {
    margin-left: 850px;
    width: 50px;
    height: 50px;
    background: rgb(48, 110, 173);
    border-radius: 100%;
    cursor: pointer;
    z-index: 10;
    position: relative;
}
.user-operater .btns .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    width: 50px;
    height: 50px;
    font-size: 24px;
    transform: rotateZ(90deg);
}
.user-interaction-data {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 350px);
    background: #fff;
    display: flex;
    justify-content: center;
}
.user-interaction-data .content {
    position: relative;
    min-width: 800px;
    max-width: 1000px;
    margin: 60px 0;
    padding-bottom: 60px;
}
.content .user-name {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin: 16px 0;
    color: rgb(97, 106, 113);
}
.user-interaction-wrap {
    width: 100%;
    margin-top: 56px;
    display: flex;
    justify-content: center;
}
.user-interaction-wrap div {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: #ccc;
    width: 70px;
    height: 100px;
    margin: 0 8px;
}
.user-interaction-wrap div i {
    font-size: 70px;
}
.op-btns {
    background: #fff;
    position: absolute;
    right: 0;
    width: 60px;

    border: 1px solid rgb(197, 197, 197);
    box-shadow: 0 0px 5px 2px #ccc9;
}
.op-btns .items {
    font-size: 14px;
    padding-bottom: 4px;
    padding: 8px;
    padding-left: 12px;
}
.op-btns .items:hover {
    color: #fff;
    background: #4b5564;
}
.items.last::after {
    position: relative;
    content: '';
    width: 70%;
    height: 1px;
    margin-bottom: 4px;
    border-top: 1px solid #cccf;
}
.watcher {
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: auto;
    height: auto;
}
</style>
