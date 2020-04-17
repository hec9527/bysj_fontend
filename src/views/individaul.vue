<template>
    <div class="container">
        <!-- 登录 注册 窗口增加过渡动画 -->
        <div class="form-box" v-if="['login', 'regist'].includes(page)">
            <transition name="slide-login">
                <UserLogin v-if="page === 'login'" :changePage="str => (page = str)"></UserLogin>
            </transition>
            <transition name="slide-regist">
                <UserRegist v-if="page === 'regist'" :changePage="str => (page = str)"></UserRegist>
            </transition>
        </div>

        <!-- 用户详情界面 -->
        <div class="user-info" v-if="userBasicInfo.userToken && !['login', 'regist'].includes(page)">
            <transition name="fade-in">
                <UserInfo v-if="page === 'home'" :changePage="str => (page = str)"></UserInfo>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '../component/userLogin';
import Regist from '../component/userRegist';
import Info from '../component/userInfo';

export default {
    data: () => {
        return {
            logined: false, // 用户是否登录
            page: 'login' // 当前展示的组件 login regist  home
        };
    },
    mounted() {
        const self = this;
        window.changePage = str => (self.page = str);
        window.getInfo = () => console.log(self.userBasicInfo.userToken);
    },
    computed: {
        userBasicInfo: function() {
            return this.getUserBasicInfo();
        }
    },
    components: {
        UserLogin: Login,
        UserRegist: Regist,
        UserInfo: Info
    },
    methods: {
        ...mapGetters(['getUserBasicInfo'])
    }
};
</script>

<style scoped>
/* 登录窗口过渡动画效果 */
.slide-login-enter-active {
    transition: all 0.5s linear;
}
.slide-login-leave-active {
    transition: all 0.5s linear;
}
.slide-login-enter,
.slide-login-leave-to {
    transform: translateX(-40px);
    opacity: 0;
}

/* 注册窗口过渡动画效果 */
.slide-regist-enter-active {
    transition: all 0.5s linear;
}
.slide-regist-leave-active {
    transition: all 0.5s linear;
}
.slide-regist-enter,
.slide-regist-leave-to {
    transform: translateX(-40px);
    opacity: 0;
}

/* 用户详情页面进出效果 */
.fade-in-enter-active {
    transition: all 0.5s linear;
}
.fade-in-leave-active {
    transition: all 0.5s linear;
}
.fade-in-enter,
.fade-in-leave-to {
    opacity: 0;
}

/* 登录注册界面背景虚化 */
.user-info,
.form-box {
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
}
.form-box {
    background: #0007;
}
</style>
