<template>
    <div class="container">
        <div class="login-form">
            <div class="form-title">
                <h2 class="login">登 录</h2>
                <span class="regist" @click="changePage('regist')">注册</span>
            </div>
            <!-- 禁用下来选择框自动填充，用户登录之后可以保存信息到 localstorage 页面加载后读取用户账户添加到 input 输入框  -->
            <input type="text" v-model="userName" name="username" placeholder="用户名" autocomplete="off" />
            <input
                type="password"
                v-model="userPasswd"
                name="password"
                placeholder="密码"
                autocomplete="off"
                @keydown.enter="login"
            />
            <div class="third-part-login">
                <div class="title">第三方登录:</div>
                <div class="login-qq"></div>
                <div class="login-wechat"></div>
            </div>
            <button @click="login">登录</button>
        </div>

        <el-loading v-if="loading"></el-loading>
    </div>
</template>

<script>
import API from '../API/API';
import { mapGetters } from 'vuex';
import { checklogin, saveUserInfo, getUserName, saveUserName } from '../tools/util';
import { Loading, Notification } from 'element-ui';

export default {
    props: {
        changePage: {
            type: Function,
            required: true
        }
    },
    data: () => {
        return {
            userName: '',
            userPasswd: '',
            loading: false
        };
    },
    mounted() {
        this.userName = getUserName();
    },
    computed: {
        userInfo: () => {
            const info = this.getUserBasicInfo();
            this.userName = info.userName || getUserName();
            return info;
        }
    },
    components: {
        elLoading: Loading
    },
    methods: {
        login() {
            const { userName, userPasswd } = this.$data;
            const result = checklogin(userName, userPasswd);
            if (!result.flag) return Notification.error(result.message);
            setTimeout(() => (this.loading = false), 30 * 1000);
            API.PostUserLogin({
                userName: this.$data.userName,
                userPasswd: this.$data.userPasswd,
                loginType: 0 // 使用账号登录
            })
                .then(res => {
                    saveUserInfo(this.userName, res.token);
                    saveUserName(this.userName);
                    Notification.success(res.msg);
                    this.changePage('home');
                    this.$store.commit('UPDATE_USER_INFO', { token: res.token, userName: this.userName });
                })
                .finally(() => (this.loading = false));
        },
        ...mapGetters(['getUserBasicInfo'])
    }
};
</script>

<style scoped>
html,
body {
    margin: 0;
    font-family: 'PingFang SC', 'Microsoft Yahei', sans-serif;
}

.container {
    user-select: none;
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
}
.login-form {
    width: 280px;
    height: 270px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    text-align: center;
    position: relative;
    z-index: 100;
    border-radius: 18px;
    backdrop-filter: blur(5px);
    background: #fff3;
    overflow: hidden; /* 隐藏多余的模糊效果 */
}
.login {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #638871;
    transition: all 275ms ease;
}
.regist {
    margin-left: 8px;
    font-size: 12px;
    color: #abf3;
    cursor: pointer;
    transition: all 275ms ease;
}
.regist:hover {
    font-size: 20px;
    font-weight: 400px;
    margin-bottom: 8px;
    color: #638871;
    transition: all 275ms ease;
}
.regist:hover ~ h2.login {
    font-size: 12px;
    color: #abf3;
    transition: all 275ms ease;
}
.login-form input,
.login-form button {
    margin: 6px 0;
    height: 36px;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 0 14px;
    color: #3d5245;
}

.login-form input::placeholder {
    color: #3d5245;
}

/* 补充，取消选中高亮蓝框 */
.login-form button:focus,
.login-form input:focus {
    outline: 0;
}

.login-form button {
    margin-top: 16px;
    background-color: rgba(57, 88, 69, 0.4);
    color: white;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.4s;
}

.login-form button:hover {
    background-color: rgba(12, 80, 38, 0.67);
}

.login-form button:focus {
    outline: 0;
}

.login-form button::before,
.login-form button::after {
    content: '';
    display: block;
    width: 80px;
    height: 100%;
    background: rgba(179, 255, 210, 0.5);
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewX(-15deg);
    filter: blur(30px);
    overflow: hidden;
    transform: translateX(-100px);
}

.login-form button::after {
    width: 40px;
    background: rgba(179, 255, 210, 0.3);
    left: 60px;
    opacity: 0;
    filter: blur(5px);
}

.login-form button:hover::before {
    transition: 1s;
    transform: translateX(320px);
    opacity: 0.7;
}

.login-form button:hover::after {
    transition: 1s;
    transform: translateX(320px);
    opacity: 1;
}
.third-part-login {
    position: relative;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.title {
    color: #fff7;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
    font-size: 12px;
    text-align: left;
}
</style>
