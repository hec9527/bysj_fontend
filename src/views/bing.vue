<template>
    <div class="container">
        <!-- banner -->
        <el-carousel height="100vh" direction="vertical" :autoplay="true" trigger="click" :close-on-click-modal="false">
            <el-carousel-item v-for="item in data" :key="item.key" :style="{ background: `url(${item.bgurl})` }">
                <div class="carousel-title glass glass-black">{{ item.title }}</div>
            </el-carousel-item>
        </el-carousel>

        <!-- dialog -->
        <el-dialog title="提示" :visible.sync="dialog" width="30%" center :show-close="false">
            <span class="content">数据获取出错，是否重新获取？</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="cancel" @click="dialog = false">关闭</el-button>
                <el-button type="primary" @click="dialog = false || fetchDailyData()">确 定</el-button>
            </span>
        </el-dialog>

        <!-- bg -->
        <div class="bg glass-black"></div>
    </div>
</template>

<script>
import API from '../API/API';
import { Loading, Carousel, Dialog } from 'element-ui';

export default {
    data() {
        return {
            data: [], // 每日一图数据
            dialog: false
        };
    },
    beforeMount() {
        this.fetchDailyData();
    },
    methods: {
        fetchDailyData() {
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            API.fetchDailyPost()
                .then(
                    res => (this.data = res),
                    err => {
                        console.error(err);
                        this.dialog = true;
                    }
                )
                .finally(() => loadingInstance.close());
        }
    },
    components: {
        elCarousel: Carousel,
        elDialog: Dialog
    }
};
</script>

<style scoped>
.bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
}

.carousel-title {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
    text-align: left;
    padding: 15px 35px 15px 15px;
    color: #fff;
}
</style>
