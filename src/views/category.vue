<template>
    <div class="container glass">
        <!-- 瀑布流加载组件 -->
        <water-fall
            :imgsArr="searchResult.data"
            :gap="5"
            :maxCols="5"
            :imgWidth="450"
            class="waterfall"
            srcKey="cover"
            ref="waterfall"
            linkRange="card"
            :reachBottomDistance="500"
            :loadingDotCount="5"
            :loadingTimeOut="300"
            @scrollReachBottom="loadMore"
            @click="clickImage"
        >
            <div slot="waterfall-over" :style="{ color: '#fff' }">我也是有底线的....</div>
        </water-fall>

        <!-- 图片弹窗组件 -->
        <div v-loading="loading" class="imageDownload" ref="downloader" :data="imageInfo" @click="clockDownloader">
            <div v-if="showOperate" class="operate">
                <div class="btns close">
                    <i class="el-icon-close" @click="clockDownloader"></i>
                </div>
                <div class="download-link">
                    <div @click="downloadImage($event, 'cover')">封面</div>
                    <div @click="downloadImage($event, 'cover30')">360p</div>
                    <div @click="downloadImage($event, 'cover50')">720p</div>
                    <div @click="downloadImage($event, 'cover70')">1080p</div>
                    <div @click="downloadImage($event, 'cover85')">高清</div>
                    <div @click="downloadImage($event, 'cover100')">超高清</div>
                </div>
            </div>
        </div>

        <!-- 回到顶部 -->
        <el-backtop target=".container" :bottom="100">
            <div class="backTop">
                UP
            </div>
        </el-backtop>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import API from '../API/API';
import URL from '../API/urls';
import vueWaterfallEasy from 'vue-waterfall-easy';
import { mapImageUrl } from '../tools/util';
// import { Notification, Backtop } from 'element-ui';

export default {
    data() {
        return {
            imageInfo: {}, // 下载图片的信息
            loading: false, // 显示加载动画?
            showOperate: false // 显示操作区域？
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        searchResult: function() {
            return this.getCategoryInfo();
        },
        category: function() {
            return this.getCurrentCategory();
        }
    },
    methods: {
        fetchData() {
            if (!this.category) {
                console.log('home');

                return (window.location.hash = '/home');
            }
            API.fetchCategoryImage({
                category: this.category,
                count: this.searchResult.count,
                len: this.searchResult.len
            }).then(res => {
                const data = {
                    category: this.category,
                    data: mapImageUrl(res.data),
                    total: res.total,
                    count: this.searchResult.count + res.len
                };
                this.$store.commit('UPDATE_CATEGORY_RESULT', data);
            });
        },
        clockDownloader() {
            if (this.loading) return false;
            this.$refs.downloader.classList.remove('show');
            this.showOperate = false;
        },
        clickImage(e, { value }) {
            e.preventDefault();
            this.loading = true;
            const elDownload = this.$refs.downloader;
            elDownload.classList.add('show');
            setTimeout(() => {
                this.imageInfo = value;
                this.showOperate = true;
            }, 300);
            const self = this;
            const img = document.createElement('img');
            img.onload = function() {
                elDownload.style = `background: url(${value.cover70});`;
                self.loading = false;
            };
            img.src = value.cover70;
        },
        downloadImage(e, str) {
            window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
            const el = document.createElement('a');
            const url = this.imageInfo[str];
            const lis = url.split('/');
            if (el.download) {
                el.download = lis[lis.length - 1];
                el.href = url;
            } else {
                el.download = lis[lis.length - 1];
                el.href = URL.BAIDU_IMAGE_DOWNLOADER + url;
            }
            el.click();
        },
        loadMore() {
            this.fetchData();
        },
        ...mapGetters(['getCategoryInfo', 'getAllCategory', 'getCurrentCategory'])
    },

    watch: {
        category: function() {
            this.fetchData();
        }
    },
    components: {
        waterFall: vueWaterfallEasy
        // elBacktop: Backtop
    }
};
</script>

<style scoped>
.container {
    padding-top: 34px;
}

.imageDownload {
    position: absolute;
    background: #fff;
    background-size: 100vw 100vh !important;
    background-position: center !important;
    background-repeat: no-repeat;
    overflow: hidden;
    top: 0;
    left: 0;
    opacity: 0.3;
    height: 100vh;
    width: 100vw;
    transform: rotateX(90deg);
    transition: all 275ms linear;
}
.show {
    z-index: 10;
    opacity: 1;
    transform: rotateX(0deg);
    transition: all 275ms linear;
}

.imageDownload.show > .operate {
    position: absolute;
    width: 100%;
    top: 34px;
    height: 40px;
    display: flex;
    flex-direction: row-reverse;
    background: #abf3;
    backdrop-filter: blur(10px);
    align-content: center;
}
.imageDownload.show > .operate > .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-size: 20px;
    font-weight: 900;
    color: #fff;
    text-shadow: 0px 0px 3px #6667;
    margin-left: 10px;
    cursor: pointer;
    transition: transform 500ms ease-out;
}
.imageDownload.show > .operate > .btns.close:hover {
    transform: rotate(180deg);
    transition: transform 500ms ease-out;
}
.imageDownload.show > .operate > .btns.close {
    margin-right: 15px;
}
.download-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    font-size: 12px;
}
.download-link > div {
    margin-left: 15px;
    cursor: pointer;
}
</style>
