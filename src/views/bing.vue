<template>
    <div class="container">
        <!-- 右侧导航条 -->
        <div class="segements">
            <ul>
                <li v-for="value in dailyPost" :key="value.date" class="dot"></li>
                <!-- <li class="dot dot-this"></li> -->
            </ul>
        </div>

        <!-- 单页滚动  -- 整屏滚动 -->
        <main class="section-cover" :style="translateY">
            <bing-section
                v-for="(value, key) in dailyPost"
                :key="key"
                :bgsrc="value.bgurl"
                :title="value.title"
                :time="value.date"
            ></bing-section>
        </main>

        <!-- 加载动画 -->
        <!-- <el-loading></el-loading> -->
    </div>
</template>

<script>
import bingSection from '../component/Section';
import API from '../API/API';
import { Loading } from 'element-ui';

export default {
    data() {
        return {
            dailyPost: [],
            currentPage: 0,
            pageHeight: 0,
            lock: false
        };
    },
    methods: {
        getDate() {
            return new Date();
        },
        wheel(e) {
            if (this.lock) return false;
            this.lock = true;
            if (e.deltaY < 0) {
                this.currentPage -= 1;
            } else if (e.deltaY > 0) {
                this.currentPage += 1;
            }
            this.currentPage =
                this.currentPage <= 0
                    ? 0
                    : this.currentPage >= this.dailyPost.length
                    ? this.dailyPost.length - 1
                    : this.currentPage;
            console.log(this.currentPage);
            setTimeout(() => (this.lock = false), 500);
        }
    },
    computed: {
        translateY() {
            const result = `transfrom:translateY(${this.currentPage * this.pageHeight}px)`;
            return result;
        }
    },
    created() {
        const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
        API.fetchDailyPost()
            .then(
                res => {
                    this.dailyPost = res;
                },
                err => {
                    console.error(err);
                }
            )
            .finally(() => loadingInstance.close());

        window.addEventListener('wheel', this.wheel);
    },
    mounted() {
        window.addEventListener('resize', () => (this.pageHeight = window.innerHeight));
    },
    components: {
        bingSection
    },
    destroyed() {
        window.removeEventListener('wheel', this.wheel);
    }
};
</script>

<style scoped>
/* .section {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url(http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);
    background-size: cover;
} */

.segements {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 35px;
    width: 8px;
    z-index: 10;
    display: flex;
    flex-direction: column;
}

.segements .dot {
    position: relative;
    width: 8px;
    height: 8px;
    background: #ffffff7a;
    border-radius: 100%;
    cursor: pointer;
    margin-top: 120%;
}

.segements .dot.dot-this {
    background: #fff;
}

.segements .dot:hover::after,
.segements .dot.dot-this::after {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 14px;
    height: 14px;
    background: #ffffff7a;
    border-radius: 100%;
}
</style>
