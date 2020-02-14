<template>
    <div class="container">
        <!-- 提示框 -->
        <el-dialog
            title="提示"
            :visible.sync="dialog"
            width="30%"
            center
            :show-close="false"
            :close-on-click-modal="false"
        >
            <span class="content">数据获取出错，是否重新获取？</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="cancel" @click="dialog = false">关闭</el-button>
                <el-button type="primary" @click="dialog = false || fetchDailyEnglish()">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 背景层 -->
        <div class="bg" :style="{ 'background-image': `url(${data.url})` }">
            <div class="daily daily-cover glass">
                <div class="daily-title">{{ data.title }}</div>
                <div class="daily-content">{{ data.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../API/API';
import { Loading, Dialog } from 'element-ui';

export default {
    data() {
        return {
            data: {},
            dialog: false
        };
    },
    beforeMount() {
        this.fetchDailyEnglish();
    },
    methods: {
        fetchDailyEnglish() {
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            API.fetchDailyEnglish()
                .then(
                    res => {
                        this.data = res.data;
                        this.data.title = (this.data.title || '').toUpperCase();
                    },
                    err => {
                        console.error(err);
                        this.dialog = true;
                    }
                )
                .finally(() => loadingInstance.close());
        }
    },
    components: {
        elDialog: Dialog
    },
    beforeUpdate() {
        console.log(this.$data);
    }
};
</script>

<style scoped>
.bg {
    width: 100vw;
    height: 100vh;
}

.daily.daily-cover {
    width: 100vw;
    height: auto;
    max-height: 170px;
    padding: 15px;
    overflow: hidden;
    bottom: 0px;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
}
.daily .daily-title {
    font-size: 28px;
}
.daily .daily-content {
    font-size: 16px;
}
</style>
