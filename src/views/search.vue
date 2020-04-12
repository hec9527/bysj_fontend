<template>
    <div class="container">
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
            <div slot="waterfall-over">我也是有底线的....</div>
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
import { mapGetters, mapMutations } from 'vuex';
import API from '../API/API';
import vueWaterfallEasy from 'vue-waterfall-easy';
import { mapImageUrl } from '../tools/util';
import { Message, Backtop } from 'element-ui';

export default {
    data() {
        return {
            defaultKw: '全部',
            imageInfo: {},
            loading: false,
            showOperate: false
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        searchResult: function() {
            return this.getSearchInfo();
        }
    },
    methods: {
        fetchData() {
            const searchInfo = this.getSearchInfo();
            const kw = searchInfo.kw || this.defaultKw;
            API.fetchKeyWorkds({
                kw,
                count: searchInfo.count,
                len: searchInfo.len
            }).then(res => {
                const data = {
                    kw,
                    data: mapImageUrl(res.data),
                    total: res.total,
                    count: searchInfo.count + res.len
                };
                this.$store.commit('UPDATE_SEARCH_RESULT', data);
                if (res.len === 0) {
                    if (searchInfo.data.length === 0) {
                        return Message.warning('找不到数据换一个关键词试试看吧');
                    }
                    this.$refs.waterfall.waterfallOver();
                }
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
                el.href = 'http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=' + url;
            }
            el.click();
        },
        loadMore() {
            this.fetchData();
        },
        ...mapGetters(['getSearchInfo']),
        ...mapMutations(['UPDATE_SEARCH_RESULT'])
    },
    components: {
        waterFall: vueWaterfallEasy,
        elBacktop: Backtop
    }
};
</script>

<style lang="postcss" scoped>
.vue-waterfall-asy-container {
    position: fixed;
}

.container {
    background: #abf3;
    backdrop-filter: blur(10px);
    padding-top: 34px;
    position: relative;
}

.imageDownload {
    position: absolute;
    background: #fff;
    background-size: 100vw 100vh !important;
    background-position: center !important;
    background-repeat: no-repeat;
    overflow: hidden;
    top: 50%;
    left: 0;
    height: 0;
    opacity: 0.3;
    width: 100vw;
    transition: all 275ms linear;
}
.imageDownload::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #abf9;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    z-index: -1;
}
.show {
    opacity: 1;
    top: 0;
    height: 100vh;
    transition: all 275ms ease-out;
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

.backTop {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
}
</style>
