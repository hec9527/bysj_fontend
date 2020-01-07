<template>
    <div class="user-login center">
        <div class="login-title">
            <p>登陆</p>
        </div>
        <div class="login-form">
            <form action="" method="post">
                <p>
                    <label for="login-userName">账户</label>
                    <Input
                        class="input"
                        prefix-icon="el-icon-user-solid"
                        type="text"
                        v-model="userName"
                        name="userName"
                        id="login-userName"
                        placeholder="请输入用户名"
                    />
                </p>
                <p>
                    <label for="login-userPasswd">密码</label>
                    <Input
                        class="input"
                        type="password"
                        prefix-icon="el-icon-user-solid"
                        name="userPasswd"
                        v-model="userPasswd"
                        id="login-userPasswd"
                        placeholder="请输入密码"
                    />
                </p>
                <p><button type="submit">登陆</button></p>
            </form>
        </div>
    </div>
</template>

<script>
import { Input } from 'element-ui';
export default {
    data: () => {
        return {
            userName: undefined,
            userPasswd: undefined
        };
    },
    components: {
        Input
        // Icon
    },
    methods: {
        blur() {
            // 输入验证
        }
    }
};
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    border: none;
    list-style: none;
    outline: none;
}

.center {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
}

.user-login {
    border: 1px solid #ccc;
    width: 600px;
    height: 400px;
    border-radius: 15px;
    background-image: linear-gradient(-225deg, #69eacb 0%, #eaccf8 48%, #6654f1 100%);
}

.login-title {
    margin: 35px 15px;
    font-size: 28px;
    text-align: center;
}

.login-form {
    display: flex;
}

.login-form .input {
    /* width: 70%; */
    background: rgba(255, 255, 255, 0.4) !important;
}

.login-form p {
    padding: 7px 15px 8px 15px;
    /* align-items: center; */
}
</style>
