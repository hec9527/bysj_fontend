<template>
    <div class="container">
        <!-- 页面操作区域 -->
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
                    <el-button type="primary" @click="addUserInfo">新增</el-button>
                </div>
            </div>
        </div>

        <!-- 页面列表数据 -->
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
                <el-table-column prop="sex" label="性别">
                    <template slot-scope="scope">
                        {{ scope.row.sex === 0 ? '男' : scope.row.sex === 1 ? '女' : '保密' }}
                    </template>
                </el-table-column>
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

        <!-- 页面modal窗口 -->
        <el-dialog :title="isEdit ? '编辑用户信息' : '新增用户信息'" width="460" :visible.sync="showModal">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账户名">
                    <el-input v-model="form.count"></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.passwd"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="form.sex" de placeholder="来选一个吧">
                        <el-option label="男" value="0"></el-option>
                        <el-option label="女" value="1"></el-option>
                        <el-option label="保密" value="2"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="showModal = false">取 消</el-button>
                <el-button type="primary" @click="saveUserInfo">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { Button, Notification, Dialog, Loading } from 'element-ui';
import API from '../API/API';
import { mapGetters } from 'vuex';
import { checklogin } from '../tools/util';

export default {
    data: () => {
        return {
            count: 0,
            showModal: false,
            isEdit: false,
            editData: {},
            form: {}
        };
    },
    components: {
        elButton: Button,
        elDialog: Dialog
    },
    methods: {
        deleteUser(id) {
            API.deleteUserInfo(id).then(
                res => {
                    Notification.success(res.msg);
                    this.fetchUserList();
                },
                () => console.log('用户信息删除失败')
            );
        },
        editUser(info) {
            console.log(info);
        },
        addUserInfo() {
            this.showModal = !this.showModal;
            this.isEdit = false;
        },
        saveUserInfo() {
            const checkResult = checklogin(this.form.count, this.form.passwd);
            if (!checkResult.flag) {
                return Notification.error(checkResult.message);
            }
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            setTimeout(() => {
                this.showModal = false;
                loadingInstance.close();
            }, 30 * 1000);
            API.addUserInfo(this.form)
                .then(
                    res => {
                        Notification.success(res.msg);
                        this.fetchUserList();
                    },
                    () => console.error('用户添加失败')
                )
                .finally(() => {
                    this.showModal = false;
                    loadingInstance.close();
                });
        },
        fetchUserList() {
            API.fetchAllUserInfo({ count: 0, len: 100 }).then(
                res => this.$store.commit('UPDATE_USER_LIST', res.data),
                () => console.warn('所有用户信息获取失败')
            );
        },
        ...mapGetters(['getAllUserInfo'])
    },
    mounted() {
        this.fetchUserList();
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
