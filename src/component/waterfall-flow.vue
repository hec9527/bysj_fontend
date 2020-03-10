<template>
    <div class="waterfall-flow">
        <div class="menuBar glass-black">
            <div class="left">
                <div v-if="keyWorld" class="keyWorld">
                    搜索关键字：<span>{{ keyWorld }}</span>
                </div>
                <div v-if="total" class="result">总共{{ total }}条数据</div>
            </div>
            <div class="right">
                <div class="layout">
                    <div class="flex-row-3" title="3列布局">
                        <el-icon class="el-icon-s-grid"></el-icon>
                    </div>
                    <div class="flex-row-2" title="2列布局">
                        <el-icon class="el-icon-menu"></el-icon>
                    </div>
                    <div class="flex-row-1" title="单列布局">
                        <span class="el-icon-undefined block">⬜️</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container flex-3">
            <div
                class="card"
                v-for="(item, index) in arr"
                :key="index"
                :imgID="item.id"
                :imgURL="item.url"
                :tag="item.tag"
            >
                <div class="card-img">
                    <img :src="item.url" class="images" />
                </div>
                <div class="card-menubar">
                    <span :data-id="item.id"><el-icon class="el-icon-star-on"></el-icon></span>
                    <span :data-url="item.url" @click="download(item.url)"
                        ><el-icon class="el-icon-download"></el-icon
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from 'element-ui';

export default {
    props: {
        arr: {
            type: Array,
            required: true
        },
        srcKey: {
            type: String,
            required: false,
            default: 'url'
        },
        keyWorld: {
            type: String,
            required: false,
            default: '4k'
        },
        total: {
            type: Number,
            required: false,
            default: 3000
        },
        loadMore: {
            type: Function,
            required: false,
            default: () => {
                return () => console.log('load more');
            }
        }
    },
    mounted() {
        console.log(this.$props);
    },
    methods: {
        download(url) {
            const urls = url.split('/');
            const el = document.createElement('a');
            var isSupportDownload = 'download' in el;
            if (isSupportDownload) {
                el.download = urls[urls.length - 1];
                el.href = url;
                el.click();
            } else {
                window.open(url);
            }
        }
    },
    data() {
        return {
            isLoading: false,
            layout: ['']
        };
    },
    components: {
        elIcon: Icon
    }
};
</script>

<style lang="postcss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
.waterfall-flow {
    position: absolute;
    top: 34px;
    width: 100%;
    height: calc(100% - 34px);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.menuBar {
    position: relative;
    display: flex;
    justify-content: space-between;
    line-height: 34px;
    padding: 0 15px;
    height: 34px;
    width: 100%;
    backdrop-filter: blur(15px);
}

.menuBar .left {
    font-size: 14px;
    display: flex;
    flex-direction: row;
    color: #ddd;
}
.menuBar .left .keyWorld {
    margin-right: 35px;
}

.menuBar .left .result {
    font-size: 12px;
}

.menuBar .right {
    color: #fff;
    display: flex;
    flex-direction: row;
}

.menuBar .right .layout {
    display: flex;
    flex-direction: row-reverse;
}

.menuBar .right .layout div {
    width: 24px;
    overflow: hidden;
    cursor: pointer;
}

.menuBar .right .layout .block {
    filter: drop-shadow(20px 0);
    left: -20px;
    width: 0;
    position: relative;
}

.container {
    width: 100%;
    height: calc(100% - 34px);
    background: #fff;
    position: relative;
    overflow-y: auto;
    transform: translateZ(0);
    will-change: contents;
}

.flex-3 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
}
.card {
    width: 33.3333333%;
    height: auto;
    display: flex;
    position: relative;
    align-content: flex-start;
    transition: all linear 275ms;
}
.card .card-img {
    display: flex;
    justify-content: flex-start;
    height: auto;
    overflow: hidden;
}
.card .card-img img {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
}
.card .card-menubar {
    position: absolute;
    width: 100%;
    height: auto;
    bottom: 0px;
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: #fff;
    background: #2349;
    padding: 5px;
    transform: translateY(30px);
    opacity: 0.3;
    /* transition: all 0.275s linear; */
}
.card .card-menubar i:hover {
    cursor: pointer;
    color: #abf;
}
.card:hover .card-menubar {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.275s linear;
}
.card:hover .card .card-img img.images {
    /* width: 102%; */
    zoom: 1.3;
    transform: translateX(-1%) translateY(-1%);
}
</style>
