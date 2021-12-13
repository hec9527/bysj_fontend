<template>
    <div class="container">
        <!-- 页面操作区域 -->
        <div class="page-oprater">
            <div class="page-title">
                <h1>用户管理</h1>
            </div>
            <div class="page-btns">
                <div class="btn">
                    <el-button type="info" @click="searchUser">查找</el-button>
                </div>
                <div class="btn">
                    <el-button type="danger" @click="searchUser">删除</el-button>
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
                <el-table-column prop="count" label="账户" fixed width="160" />
                <el-table-column prop="avator" label="头像">
                    <template slot-scope="scope">
                        <img v-if="scope.row.avator" :src="scope.row.avator" />
                        <i v-if="!scope.row.avator" class="el-icon-user-solid"></i>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="用户名" width="200" />
                <el-table-column prop="age" label="年龄" />
                <el-table-column prop="sex" label="性别">
                    <template slot-scope="scope">
                        {{ scope.row.sex === 0 ? '男' : scope.row.sex === 1 ? '女' : '保密' }}
                    </template>
                </el-table-column>
                <el-table-column prop="vip" label="VIP" />
                <el-table-column prop="level" label="等级" />
                <el-table-column prop="balance" label="余额" width="140" />
                <el-table-column prop="permission" label="权限" width="120">
                    <template slot-scope="scope">
                        {{ ['超级管理员', '管理员', '会员用户', '普通用户'][scope.row.permission] || '其它用户' }}
                    </template>
                </el-table-column>
                <el-table-column prop="qq" label="QQ" width="120" />
                <el-table-column prop="wechat" label="微信" width="160" />
                <el-table-column prop="phone" label="电话" width="140" />
                <el-table-column prop="email" label="邮箱" width="200" />
                <el-table-column prop="addr" label="地址" width="250" />
                <el-table-column prop="motto" label="签名" width="400" />
                <el-table-column prop="lasttime" label="最后登录" width="100" />
                <el-table-column prop="forbidden" label="禁用">
                    <template slot-scope="scope">
                        <span :style="{ color: Number(scope.row.forbidden) === 1 ? 'red' : 'green' }">
                            {{ Number(scope.row.forbidden) === 1 ? '已禁用' : '已启用' }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="deleteUser(scope.row.id)" type="text" size="small">删除</el-button>
                        <el-button @click="editUser(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!-- 添加新用户 -->
        <el-dialog title="新增用户信息" width="460" :visible.sync="addUserInfoModal">
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
                <el-button @click="addUserInfoModal = false">取 消</el-button>
                <el-button type="primary" @click="saveUserInfo">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 修改已有用户 -->
        <el-dialog title="修改用户信息" width="460" class="changeUserInfo" :visible.sync="editUserInfoModal">
            <el-form ref="form" :model="editData" label-width="80px">
                <el-form-item label="账户名">
                    <el-input v-model="editData.count"></el-input>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="editData.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="editData.passwd" type="password"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="editData.age" type="number" min="0" max="200"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="editData.sex" placeholder="来选一个吧">
                        <el-option label="男" :value="0"></el-option>
                        <el-option label="女" :value="1"></el-option>
                        <el-option label="保密" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="VIP">
                    <el-input v-model="editData.vip" type="number" min="0" max="6"></el-input>
                </el-form-item>
                <el-form-item label="等级">
                    <el-input v-model="editData.level" type="number" min="0" max="6"></el-input>
                </el-form-item>
                <el-form-item label="余额">
                    <el-input v-model="editData.balance" type="number" min="0" max="9999999"></el-input>
                </el-form-item>
                <el-form-item label="权限">
                    <el-select v-model="editData.permission" placeholder="用户权限">
                        <el-option label="超级管理员" :value="0"></el-option>
                        <el-option label="管理员" :value="1"></el-option>
                        <el-option label="会员用户" :value="2"></el-option>
                        <el-option label="普通用户" :value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="QQ">
                    <el-input v-model="editData.qq"></el-input>
                </el-form-item>
                <el-form-item label="微信">
                    <el-input v-model="editData.wechat"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="editData.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="editData.email"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="editData.addr"></el-input>
                </el-form-item>
                <el-form-item label="签名">
                    <el-input v-model="editData.motto"></el-input>
                </el-form-item>
                <el-form-item label="禁用">
                    <el-select v-model="editData.forbidden" placeholder="用户权限">
                        <el-option label="启用" :value="0"></el-option>
                        <el-option label="禁用" :value="1"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editUserInfoModal = false">取 消</el-button>
                <el-button type="primary" @click="saveEditUserInfo">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { Button, Notification, Dialog, Loading } from 'element-ui';
import API from '../API';
import { mapGetters } from 'vuex';
import { checklogin } from '../tools/util';

export default {
    data: () => {
        return {
            count: 0,
            addUserInfoModal: false,
            editUserInfoModal: false,
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
            this.editData = info;
            this.editUserInfoModal = true;
        },
        addUserInfo() {
            this.addUserInfoModal = !this.addUserInfoModal;
        },
        saveUserInfo() {
            const checkResult = checklogin(this.form.count, this.form.passwd);
            if (!checkResult.flag) {
                return Notification.error(checkResult.message);
            }
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            setTimeout(() => {
                this.addUserInfoModal = false;
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
                    this.addUserInfoModal = false;
                    loadingInstance.close();
                });
        },
        saveEditUserInfo() {
            const checkResult = checklogin(this.editData.count, this.editData.passwd);
            if (!checkResult.flag) {
                return Notification.error(checkResult.message);
            }
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            API.updateUserInfo(this.editData)
                .then(
                    res => {
                        Notification.service(res.mes);
                        this.fetchUserList();
                    },
                    () => console.log(`修改用户数据错误：${this.editData}`)
                )
                .finally(() => {
                    loadingInstance.close();
                    this.editUserInfoModal = false;
                });
        },
        fetchUserList() {
            API.fetchAllUserInfo({ count: 0, len: 100 }).then(
                res => this.$store.commit('UPDATE_USER_LIST', res.data),
                () => console.warn('所有用户信息获取失败')
            );
        },
        searchUser() {
            Notification.warning('别点了，这里还没完成');
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
    padding: 0 16px;
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

.changeUserInfo .el-select {
    width: 100% !important;
}
</style>
