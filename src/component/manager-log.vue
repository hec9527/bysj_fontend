<template>
    <div class="container">
        <div class="page-title">
            <h1>系统日志</h1>
            <div class="btns">
                <el-button type="text" @click="currentPage -= 1" :disabled="currentPage <= 0">
                    上一页
                </el-button>
                <span class="pagenations">{{ currentPage + 1 }} / {{ systemLog.length }}</span>
                <el-button type="text" @click="currentPage += 1" :disabled="currentPage >= systemLog.length - 1"
                    >下一页</el-button
                >
            </div>
        </div>
        <div class="logs-wrap">
            <p class="lines" v-for="(line, index) in showlogs" :key="index">
                {{ line }}
            </p>
        </div>
    </div>
</template>

<script>
import API from '../API/API';
import { mapGetters } from 'vuex';

export default {
    data: () => {
        return {
            currentPage: 0
        };
    },
    mounted() {
        API.fetchSystemLog().then(
            res => this.$store.commit('FETCH_SYSTEM_LOG', res.data),
            rej => console.log(rej)
        );
    },
    methods: {
        ...mapGetters(['getSystemLog'])
    },
    computed: {
        systemLog: function() {
            const logs = this.getSystemLog();
            let arr = logs.map(log => {
                return log.split('\n');
            });
            return arr;
        },
        showlogs: function() {
            return this.systemLog[this.currentPage];
        }
    }
};
</script>

<style scoped>
.container {
    background: #000;
    color: #fff;
    padding: 16px;
    border-radius: 4px;
    overflow: auto;
}
.page-title {
    position: sticky;
    top: 0;
    background: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
    padding: 16px 0;
}

.pagenations {
    font-size: 14px;
    display: inline-block;
    margin: 0 8px;
}
.logs-wrap {
    font-family: 'Courier New', Courier, monospace;
    overflow: auto;
    margin-bottom: 48px;
    height: auto;
    line-height: 1.4rem;
    font-weight: 100;
}
</style>
