<template>
    <div class="container">
        <div class="page-oprater">
            <div class="page-title">
                <h1>用户管理</h1>
            </div>
            <div class="page-btns">
                <div class="btn">
                    <el-button type="info">查找</el-button>
                </div>
                <div class="btn">
                    <el-button type="danger">删除</el-button>
                </div>
                <div class="btn">
                    <el-button type="primary">新增</el-button>
                </div>
            </div>
        </div>
        <div class="page-body">
            <el-table ref="userTable" :data="userDate" highlight-current-row style="width: 100%">
                <el-table-column prop="id" label="用户ID" fixed />
                <el-table-column prop="count" label="账户" fixed width="120" />
                <el-table-column prop="avator" label="头像">
                    <template slot-scope="scope">
                        <img v-if="scope.row.avator" :src="scope.row.avator" />
                        <i v-if="!scope.row.avator" class="el-icon-user-solid"></i>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="昵称" width="200" />
                <el-table-column prop="age" label="年龄" />
                <el-table-column prop="sex" label="性别" />
                <el-table-column prop="vip" label="VIP" />
                <el-table-column prop="level" label="等级" />
                <el-table-column prop="balance" label="账户" width="100" />
                <el-table-column prop="permission" label="权限">
                    <template slot-scope="scope">
                        {{ scope.row.permission === 0 ? '管理员' : '普通用户' }}
                    </template>
                </el-table-column>
                <el-table-column prop="qq" label="QQ" width="120" />
                <el-table-column prop="wechat" label="微信" width="120" />
                <el-table-column prop="phone" label="电话" width="120" />
                <el-table-column prop="email" label="邮箱" width="140" />
                <el-table-column prop="addr" label="地址" width="200" />
                <el-table-column prop="motto" label="签名" width="250" />
                <el-table-column prop="lasttime" label="最后登录" width="100" />
                <el-table-column prop="forbidden" label="禁用" />
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="deleteUser(scope.row.id)" type="text" size="small">删除</el-button>
                        <el-button @click="editUser(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { Button, Notification } from 'element-ui';
import API from '../API/API';
import { mapGetters } from 'vuex';

export default {
    data: () => {
        return {
            count: 0
        };
    },
    components: {
        elButton: Button
    },
    methods: {
        deleteUser(id) {
            API.deleteUserInfo(id).then(
                res => {
                    Notification.success(res.msg);
                },
                () => console.log('用户信息删除失败')
            );
        },
        editUser(info) {
            console.log(info);
        },
        ...mapGetters(['getAllUserInfo'])
    },
    mounted() {
        API.fetchAllUserInfo({ count: 0, len: 100 }).then(
            res => this.$store.commit('UPDATE_USER_LIST', res.data),
            () => console.warn('所有用户信息获取失败')
        );
    },
    computed: {
        userDate: function() {
            return this.getAllUserInfo() || [];
        }
    }
};
</script>

<style scoped>
.container {
    position: relative;
}
.page-oprater {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 50px;
}
h1 {
    font-size: 26px;
    font-weight: 900;
}
.page-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
}
.btn {
    margin-left: 8px;
}
</style>
