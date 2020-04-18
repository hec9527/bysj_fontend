<template>
    <div class="container">
        <div class="regist-form">
            <div class="form-title">
                <span class="regist">注册</span>
                <h2 class="login" @click="changePage('login')">登 录</h2>
            </div>
            <input type="text" v-model="userName" name="username" placeholder="请输入用户名" autocomplete="off" />
            <input type="password" v-model="userPasswd" name="password" placeholder="请输入密码" autocomplete="off" />
            <input
                type="password"
                v-model="userPasswdRe"
                name="password"
                placeholder="确认密码"
                autocomplete="off"
                @keydown.enter="regist"
            />
            <button @click="regist">注册</button>
        </div>

        <el-loading v-if="loading"></el-loading>
    </div>
</template>

<script>
import API from '../API/API';
import { checkRegist } from '../tools/util';
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
            userPasswdRe: '',
            loading: false
        };
    },
    components: {
        elLoading: Loading
    },
    methods: {
        regist() {
            const { userName, userPasswd, userPasswdRe } = this.$data;
            const result = checkRegist(userName, userPasswd, userPasswdRe);
            if (!result.flag) return Notification.error(result.message);
            setTimeout(() => (this.loading = false), 30 * 1000);
            API.PostUserRegist({
                userName: this.userName,
                userPasswd: this.userPasswd
            })
                .then(
                    res => {
                        localStorage.setItem('userName', this.userName);
                        this.changePage('login');
                        Notification.success(res.msg);
                    },
                    rej => {
                        console.log(rej);
                    }
                )
                .finally(() => (this.loading = false));
        }
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
.regist-form {
    width: 280px;
    height: 285px;
    display: flex;
    flex-direction: column;
    padding: 40px;
    text-align: center;
    position: relative;
    z-index: 100;
    border-radius: 18px;
    backdrop-filter: blur(5px);
    background: #fff5;
    overflow: hidden; /* 隐藏多余的模糊效果 */
}
.regist {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #638871;
    transition: all 275ms ease;
}
.login {
    margin-left: 8px;
    font-size: 12px;
    color: #abf3;
    cursor: pointer;
    transition: all 275ms ease;
}
.login:hover {
    font-size: 20px;
    font-weight: 400px;
    margin-bottom: 8px;
    color: #638871;
    transition: all 275ms ease;
}
.login:hover ~ h2.login {
    font-size: 12px;
    color: #abf3;
    transition: all 275ms ease;
}
.regist-form input,
.regist-form button {
    margin: 6px 0;
    height: 36px;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 0 14px;
    color: #3d5245;
}

.regist-form input::placeholder {
    color: #3d5245;
}

/* 补充，取消选中高亮蓝框 */
.regist-form button:focus,
.regist-form input:focus {
    outline: 0;
}

.regist-form button {
    margin-top: 16px;
    background-color: rgba(57, 88, 69, 0.4);
    color: white;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.4s;
}

.regist-form button:hover {
    background-color: rgba(12, 80, 38, 0.67);
}

.regist-form button:focus {
    outline: 0;
}

.regist-form button::before,
.regist-form button::after {
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

.regist-form button::after {
    width: 40px;
    background: rgba(179, 255, 210, 0.3);
    left: 60px;
    opacity: 0;
    filter: blur(5px);
}

.regist-form button:hover::before {
    transition: 1s;
    transform: translateX(320px);
    opacity: 0.7;
}

.regist-form button:hover::after {
    transition: 1s;
    transform: translateX(320px);
    opacity: 1;
}
.divider {
    height: 26px;
}
</style>
