<template>
    <div class="container glass">
        <!-- banner -->
        <el-carousel height="100vh" direction="vertical" :autoplay="true" trigger="click" :close-on-click-modal="false">
            <el-carousel-item v-for="item in dailyData" :key="item.id" :style="{ background: `url(${item.url})` }">
                <div class="carousel-content glass glass-black">
                    <div class="carousel-title ">{{ item.title }}</div>
                    <div class="carousel-date">
                        <div>{{ item.date }}</div>
                        <!-- <div class="carousel-datePicker">
                            <el-date-picker
                                :style="{ width: 50, overflow: 'hidden' }"
                                ref="datePicker"
                                type="date"
                                placeholder="选择日期"
                                format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                        </div> -->
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import API from '../API/API';
import { mapGetters } from 'vuex';
import { Loading, Carousel, Notification } from 'element-ui';

export default {
    data() {
        return {
            dialog: false,
            retry: 0
        };
    },
    beforeMount() {
        this.fetchDailyData();
    },
    computed: {
        dailyData: function() {
            return this.getBingDaily();
        }
    },
    methods: {
        fetchDailyData() {
            const loadingInstance = Loading.service({ fullscreen: true, text: 'loading' });
            API.fetchDailyPost()
                .then(
                    res => {
                        if (res.code === 0) {
                            this.$store.commit('UPDATE_BINY_DAILY', res.data);
                        } else {
                            this.retry += 1;
                            if (this.retry > 3) {
                                Notification.warning('必应每日数据获失败');
                            } else {
                                this.fetchDailyData();
                            }
                        }
                    },
                    err => {
                        console.error(err);
                        this.dialog = true;
                    }
                )
                .finally(() => loadingInstance.close());
        },
        // TODO 添加必应每日图片查看指定日期数据的功能
        // openDatePicker() {
        //     this.$refs.datePicker.click();
        // },

        ...mapGetters(['getBingDaily'])
    },
    components: {
        elCarousel: Carousel
    }
};
</script>

<style scoped>
.glass {
    backdrop-filter: blur(3px);
}

.carousel-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
    text-align: left;
    padding: 25px 35px 15px 15px;
    color: #fff;
}
.carousel-title {
    font-size: 22px;
    margin-bottom: 8px;
}
.carousel-date {
    cursor: pointer;
    font-size: 16px;
}
.carousel-datePicker {
    position: absolute;
    height: 0;
}
.el-carousel__item {
    background-size: 100% 100% !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}
</style>
