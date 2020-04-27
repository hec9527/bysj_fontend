<template>
    <div class="contianer">
        <div class="page-operate">
            <div class="page-title">
                <span>页面VU数据详情</span>
            </div>
            <div>
                <el-button type="info" @click="flashDate">刷新</el-button>
            </div>
        </div>
        <div class="page-table">
            <el-table :data="tableData">
                <el-table-column prop="date" label="日期" />
                <el-table-column prop="path" label="页面路由" />
                <el-table-column prop="vu" label="VU数据" />
                <el-table-column prop="click" label="点击数" />
            </el-table>
        </div>
    </div>
</template>

<script>
import { Loading } from 'element-ui';

export default {
    data: () => {
        const ONE_DAY = 86400000;
        const TODAY = new Date().getTime();
        const path = ['/home', '/category', '/biying', '/daily', '/share', '/indi'];
        const getDate = () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                for (let j = 0, len = path.length; j < len; j++) {
                    data.push({
                        date: new Date(TODAY - ONE_DAY * i).toLocaleDateString(),
                        vu: `${(Math.random() * 3000) | 0}/${(Math.random() * 2000) | 0}`,
                        path: path[j],
                        click: ((Math.random() * 2000) | 0) + 200
                    });
                }
            }
            return data;
        };

        return {
            tableData: getDate()
        };
    },
    methods: {
        // 刷新数据
        flashDate() {
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            setTimeout(() => {
                loadingInstance.close();
            }, Math.random() * 3 * 1000);
        }
    }
};
</script>

<style lang="stylus">
.container {
    position: relative;
}
.page-table {
    position: relative;
}
.page-title {
    font-size: 26px;
    font-weight: 900;
}
.page-operate {
    position: relative;
    padding: 7px 0;
    height: 50px;
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    justify-content: space-between;
}
</style>
