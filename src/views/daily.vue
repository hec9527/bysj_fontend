<template>
    <div class="container glass">
        <div class="background-img" :style="{ background: `url(${dailyEnglish.url})` }"></div>
        <div class="message-container">
            <div class="english-title">
                <span>{{ dailyEnglish.english }} </span>
                <span><i class="el-icon-headset play-btn" @click="playAudio"></i></span>
                <span> <audio :src="dailyEnglish.voice" ref="audio"></audio> </span>
            </div>
            <div class="translate-title">{{ dailyEnglish.translate }}</div>
            <div class="date-title">{{ dailyEnglish.time }}</div>
        </div>
    </div>
</template>

<script>
import API from '../API/API';
import { mapGetters } from 'vuex';
import { Loading } from 'element-ui';

export default {
    data() {
        return {
            retry: 0
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
                        if (res.code === 0) {
                            this.$store.commit('UPDATE_DAILY_ENGLISH', res.data[0]);
                        } else {
                            this.retry++;
                            if (this.retry > 3) {
                                Notification.console.error('每日英语数据获取失败!');
                            }
                        }
                    },
                    error => {
                        console.error(error);
                    }
                )
                .finally(() => loadingInstance.close());
        },
        playAudio() {
            this.$refs.audio.play();
        },
        ...mapGetters(['getDailyEnglish'])
    },
    computed: {
        dailyEnglish: function() {
            return this.getDailyEnglish();
        }
    },
    components: {}
};
</script>

<style scoped>
.background-img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-size: cover !important;
    background-position: center;
    top: 0;
    left: 0;
}
.message-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: auto;
    backdrop-filter: blur(3px);
    background: #0004;
    color: #fff;
    padding: 15px 25px;
}
.english-title {
    margin-bottom: 8px;
    font-size: 24px;
    font-family: 'Times New Roman', Times, serif;
}
.english-title .play-btn {
    color: #fff9;
    cursor: pointer;
}
.date-title,
.translate-title {
    font-size: 12px;
    color: #fff9;
    margin-bottom: 4px;
}
</style>
