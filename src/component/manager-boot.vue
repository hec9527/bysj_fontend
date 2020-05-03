<template>
    <div class="container">
        <!-- 页面标题 -->
        <div class="page-title">
            <h1>系统设置</h1>
            <div>
                <div class="title-btns" v-if="isEdit">
                    <div class="my-btn title-btn cancel" @click="isEdit = !isEdit">取消</div>
                    <div class="my-btn title-btn save" @click="saveConfig">保存</div>
                </div>
                <div class="my-btn title-btn" v-if="!isEdit" @click="isEdit = !isEdit">修改</div>
            </div>
        </div>
        <!-- 页面按钮主体 -->
        <div class="page-btns">
            <div class="my-btn btn-restart" @click="dialogVisible = true">重启</div>
            <div class="my-btn btn-shutdown" @click="dialogVisibleShutdown = true">关闭</div>
        </div>
        <!-- 页面展示 -->
        <div class="page-showconfig">
            <div class="my-row-wrap">
                <div>
                    <h3>全局属性设置</h3>
                    <el-row title="token加盐">
                        <div>jwtSecret</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.jwtSecret" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.jwtSecret }}</span>
                        </div>
                    </el-row>
                    <el-row title="token有效期">
                        <div>jwtExpiresIn</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.jwtExpiresIn" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.jwtExpiresIn }}</span>
                        </div>
                    </el-row>
                    <el-row title="请求过滤">
                        <div>enableVerify</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.enableVerify" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.enableVerify }}</span>
                        </div>
                    </el-row>
                    <el-row title="服务器地址">
                        <div>serveHost</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.serveHost" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.serveHost }}</span>
                        </div>
                    </el-row>
                    <el-row title="服务器端口">
                        <div>servePort</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.servePort" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.servePort }}</span>
                        </div>
                    </el-row>
                </div>

                <div>
                    <h3>数据库设置</h3>
                    <el-row title="数据库主机">
                        <div>dbHost</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbHost" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbHost }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库端口">
                        <div>dbPort</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbPort" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbPort }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库用户名">
                        <div>dbUser</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbUser" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbUser }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库密码">
                        <div>dbPasswd</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbPasswd" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbPasswd }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库名">
                        <div>dbDatabase</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbDatabase" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbDatabase }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库连接池大小">
                        <div>dbPool</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbPool" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbPool }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库超时设置">
                        <div>dbTimeOut</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbTimeOut" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbTimeOut }}</span>
                        </div>
                    </el-row>
                    <el-row title="数据库同时执行多条语句">
                        <div>dbMultiSQL</div>
                        <div v-if="isEdit"><input class="myInput" v-model="form.dbMultiSQL" /></div>
                        <div v-if="!isEdit">
                            <span>{{ config.dbMultiSQL }}</span>
                        </div>
                    </el-row>
                </div>
            </div>

            <h3>腾讯AI开放平台接入</h3>
            <el-row title="接入应用名称">
                <div>appName</div>
                <div>
                    <span>{{ config.appName }}</span>
                </div>
            </el-row>
            <el-row title="接入应用ID">
                <div>appId</div>
                <div>
                    <span>{{ config.appId }}</span>
                </div>
            </el-row>
            <el-row title="接入应用Key">
                <div>appKey</div>
                <div>
                    <span>{{ config.appKey }}</span>
                </div>
            </el-row>
            <el-row title="图片识别API">
                <div>appAPI</div>
                <div>
                    <span>{{ config.appAPI }}</span>
                </div>
            </el-row>
        </div>
        <!-- 重启提示 -->
        <el-dialog title="重启服务" :visible.sync="dialogVisible" width="30%">
            <span>
                <p>确定要重新启动服务器么？</p>
                <p><b>重启服务会导致目前所有登录用户的Token信息失效</b></p>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="restartServer()">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 关机提示 -->
        <el-dialog title="关闭服务器" :visible.sync="dialogVisibleShutdown" width="30%">
            <span>
                <p>确定要关闭服务器服务器么？</p>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleShutdown = false">取 消</el-button>
                <el-button type="primary" @click="shutdownServer()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import API from '../API/API';
import { mapGetters } from 'vuex';
import { Notification } from 'element-ui';

export default {
    data: () => {
        return {
            isEdit: false,
            form: {},
            config: {},
            dialogVisible: false,
            dialogVisibleShutdown: false
        };
    },
    mounted() {
        this.fetchConfigData();
    },
    methods: {
        fetchConfigData() {
            API.fetchServerConfig().then(
                res => {
                    this.$store.commit('FETCH_SERVER_CONFIG', res.data);
                    this.config = this.form = this.getSystemConfig();
                    // = this.getSystemConfig();
                },
                () => console.error('服务器配置信息加载错误')
            );
        },
        saveConfig() {
            API.saveServerConfig(this.form)
                .then(
                    res => Notification.success(res.msg),
                    () => console.error('保存服务器配置信息出错')
                )
                .finally(() => (this.isEdit = false));
        },
        restartServer() {
            API.restartServer()
                .then(
                    res => Notification.success(res.msg),
                    () => console.error('服务器重启失败')
                )
                .finally(() => (this.dialogVisible = false));
        },
        shutdownServer() {
            API.shutdownServer()
                .then(
                    res => Notification.success(res.msg),
                    () => console.error('关闭服务器失败')
                )
                .finally(() => (this.dialogVisibleShutdown = false));
        },

        ...mapGetters(['getSystemConfig'])
    }
};
</script>

<style scoped>
.container {
    padding: 0 16px;
    background: rgb(235, 236, 240);
    overflow: scroll;
    padding-bottom: 35px;
    border-radius: 4px;
}
.page-title {
    display: flex;
    z-index: 10;
    position: sticky;
    background: rgb(235, 236, 240);
    padding-bottom: 16px;
    top: 0;
    justify-content: space-between;
}
.page-title h1 {
    font-size: 26px;
    padding-top: 16px;
    color: rgb(152, 155, 167);
}
.page-title div {
    display: flex;
    justify-content: center;
    align-items: center;
}
.my-btn {
    width: 140px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15%;
    cursor: pointer;
    margin: 0 50px;
    background: rgb(235, 236, 240) !important;
    font-size: 30px;
    color: #fff;
    font-weight: 500;
    box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
    transition: all 0.2s ease-in-out;
}
.my-btn:hover {
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    color: rgb(187, 190, 203);
}
.my-btn:active {
    box-shadow: inset 1px 1px 2px #fff, inset -1px -1px 2px #babecc;
}
.title-btns {
    display: flex;
    justify-content: end;
}
.page-title .my-btn.title-btn {
    font-size: 13px;
    width: 45px;
    height: 30px;
    margin: 0 0 0 8px;
}
.page-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
}

.btn-restart {
    color: rgb(101, 179, 114);
}
.btn-shutdown {
    color: rgb(230, 120, 60);
}
.page-showconfig {
    padding: 8px;
}
.page-showconfig h3 {
    color: rgb(152, 155, 167);
    padding-top: 24px;
    padding-bottom: 16px;
}
.el-row {
    color: rgb(187, 190, 203);
    display: flex;
    justify-content: left;
    margin-bottom: 8px;
    font-size: 18px;
    height: 44px;
    align-items: center;
}
.el-row div:nth-child(1) {
    min-width: 160px;
    max-width: 300px;
    text-align: right;
    padding-right: 15px;
}
.el-row div:nth-child(1)::after {
    content: ':';
}
.el-row input {
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 16px;
    padding: 8px 16px;
    color: #babecc;
    background-color: #ebecf0;
    text-shadow: 1px 1px 0 #fff;
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;
}
.el-row input:focus {
    box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
.el-row span {
    margin-left: 16px;
}
.my-row-wrap {
    display: flex;
}
.my-row-wrap > div {
    width: 50%;
}
</style>
