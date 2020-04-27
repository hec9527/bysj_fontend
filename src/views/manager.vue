<template>
    <div class="container">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu @select="key => (active = key)">
                    <el-menu-item-group>
                        <template slot="title">
                            页面埋点数据
                        </template>
                        <el-menu-item index="1-1">页面VU</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">
                            爬虫管理
                        </template>
                        <el-menu-item index="2-1">360壁纸</el-menu-item>
                        <el-menu-item index="2-2">金山每日</el-menu-item>
                        <el-menu-item index="2-3">必应图片</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <template slot="title">
                            系统管理
                        </template>
                        <el-menu-item index="3-1">用户管理</el-menu-item>
                        <el-menu-item index="3-2">图片管理</el-menu-item>
                        <el-menu-item index="3-3">系统日志</el-menu-item>
                        <el-menu-item index="3-4">系统设置</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header :height="'50'" style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <!-- TODO 增加用户信息页面跳转， 用户退出 -->
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>信息</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                        <span>王小虎</span>
                    </el-dropdown>
                </el-header>

                <el-main>
                    <!-- 使用 v-if 模拟路由 -->
                    <manager-vu v-if="active[0] === '1'" :active="active" />
                    <manager-spider v-if="active[0] === '2'" :active="active" />
                    <manager-system v-if="active[0] === '3'" :active="active" />
                    <manager-setting v-if="active[0] === '4'" :active="active" />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { Container } from 'element-ui';
import managerVu from '../component/manager-uv.vue';
import managerSpider from '../component/manager-spider.vue';
import managerSystem from '../component/manager-system.vue';
import managerSetting from '../component/manager-setting.vue';

export default {
    data: () => {
        return {
            active: '1-1'
        };
    },
    mounted() {
        // TODO 挂载之后获取用户的所有信息
    },
    methods: {},
    components: {
        elContainer: Container,
        managerVu,
        managerSpider,
        managerSystem,
        managerSetting
    }
};
</script>

<style scoped>
.container {
    position: relative;
    background: #fff;
    padding-top: 34px;
}
.el-header {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    background: #abf3;
}
.el-aside {
    min-height: calc(100vh - 34px) !important;
}
.el-main {
    position: relative;
    min-height: calc(100vh - 84px);
}
</style>
