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
        <main class="section-cover">
            <bing-section
                v-for="(value, key) in dailyPost"
                :key="key"
                :bgsrc="value.bgurl"
                :title="value.title"
            ></bing-section>
        </main>

        <!-- 加载动画 -->
        <!-- <el-loading></el-loading> -->
    </div>
</template>

<script>
import bingSection from '../component/Section';
import API from '../API/API';
// import { Message, Loading } from 'element-ui';

export default {
    data() {
        return {
            dailyPost: [
                {
                    bgurl:
                        'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: '测试数据，这是测试数据',
                    date: Math.random() * 999999999999
                },
                {
                    bgurl:
                        'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: '测试数据，这是测试数据',
                    date: Math.random() * 999999999999
                },
                {
                    bgurl:
                        'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: '测试数据，这是测试数据',
                    date: Math.random() * 999999999999
                },
                {
                    bgurl:
                        'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: '测试数据，这是测试数据',
                    date: Math.random() * 999999999999
                },
                {
                    bgurl:
                        'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: '测试数据，这是测试数据',
                    date: Math.random() * 999999999999
                },
                {
                    bgurl:
                        'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                    title: '测试数据，这是测试数据',
                    date: Math.random() * 999999999999
                }
            ]
        };
    },
    methods: {
        getDate() {
            return new Date();
        }
    },
    created() {
        API.fetchDailyPost().then(() => {
            // this.$message({
            //     showClose: true,
            //     message: '这是一条消息提示'
            // });
        });
    },
    components: {
        bingSection
        // elLoading: Loading
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
