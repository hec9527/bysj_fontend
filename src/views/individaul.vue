<template>
    <div class="container">
        <p><br /><br /></p>

        <UserLogin></UserLogin>
        <center>个人中心</center>
    </div>
</template>

<script>
import Login from '../component/userLogin';
export default {
    data: () => {
        return {};
    },
    components: {
        UserLogin: Login
    },
    methods: {
        getUserInfo() {
            //
        }
    }
};
</script>

<style scoped>
.container {
    background: #e0e3da;
}
</style>
