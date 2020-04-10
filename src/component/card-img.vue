<template>
    <div class="container">
        <div class="card">
            <div class="card-img">
                <div class="images" :style="{ background: `url(${imgSrc})` }"></div>
                <!-- <img :src="item.url" class="images" /> -->
            </div>
            <div class="card-menubar">
                <div v-for="(item, index) in imgUrls" :key="index" @click="download(item.url)">
                    <el-icon class="el-icon-download"></el-icon>
                    <span>{{ handleResolution(item.resolution) }}</span>
                </div>
                <div @click="download(imgSrc)">
                    <el-icon class="el-icon-download"></el-icon>
                    <span>原始大小</span>
                </div>
                <div class="isLike">
                    <div>
                        <span title="喜欢">❤️</span>
                    </div>
                    <div>
                        <span title="不喜欢">💔</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 缩略图，预览使用缩略图，否则会很卡
        imgSrc: {
            type: String,
            required: false,
            default: 'http://p4.qhimg.com/bdr/__100/t01960d3ef2ea8d3b6d.jpg'
        },
        imgId: {
            type: Number,
            required: false,
            default: (Math.random() * 20000) | 0
        },
        imgUrls: {
            type: Array,
            required: false,
            // 测试无惧
            default: () => [
                {
                    url: 'http://p4.qhimg.com/bdr/__100/t01960d3ef2ea8d3b6d.jpg',
                    resolution: '1920*1080'
                },
                {
                    url: 'http://p4.qhimg.com/bdr/__100/t01960d3ef2ea8d3b6d.jpg',
                    resolution: '1920*1080'
                }
            ]
        }
    },
    created() {
        console.log(this.imgSrc);
        const el = document.createElement('img');
        el.onload = () => (this.isLoad = true);
        el.src = this.imgSrc;
    },
    data() {
        return {
            isLoad: false
        };
    },
    methods: {
        // 图片下载
        download(url) {
            const el = document.createElement('a');
            if (el.download) {
                const fileName = url.slice(url.lastIndexOf('/') + 1);
                el.download = fileName.splite('?')[0];
                el.href = url;
                el.click();
            } else {
                el.target = '_blank';
                el.href =
                    'http://image.baidu.com/search/down?tn=download&amp;word=download&amp;ie=utf8&amp;fr=detail&amp;url=' +
                    url;
                el.click();
                console.log('不支持download属性，采用百度下载');
            }
        },
        // 处理分辨率
        handleResolution(res) {
            const result = /(\d+)[^\d]+(\d+)/.exec(res);
            return result[1] + 'x' + result[2];
        }
    }
};
</script>

<style lang="postcss" scoped>
.container {
    padding-top: 50px;
    width: 400px;
    height: auto;
}

.card {
    width: 100%;
    height: 56.25%;
    overflow: hidden;
    position: relative;
}

.card-img {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.card-img .images {
    position: relative;
    width: 100%;
    height: auto;
}

.card-img::after {
    content: 'loading';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #abf9;
    font-size: 20px;
    background: #abf3;
    z-index: -1;
}

.card-menubar {
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    background: #333c;
    backdrop-filter: blur(5px);
    color: #fff;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.card-menubar div {
    padding-left: 5px;
    cursor: pointer;
}

.card-menubar div span:hover {
    border-bottom: 1px #fcf ridge;
    color: #fcf;
}

.isLike {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.card:hover .images {
    width: 110%;
    transform: translateX(-5%) translateY(-5%);
    transition: all 0.1s linear;
}
.card:hover {
    z-index: 100;
    transition: all 0.3s linear;
}
</style>
