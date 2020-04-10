<template>
    <div class="container">
        <water-fall
            :imgsArr="searchResult.data"
            :gap="5"
            :maxCols="5"
            :imgWidth="450"
            srcKey="cover"
            :reachBottomDistance="500"
            :loadingDotCount="5"
            :loadingTimeOut="300"
            @scrollReachBottom="loadMore"
        />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import API from '../API/API';
import vueWaterfallEasy from 'vue-waterfall-easy';
import { mapImageUrl } from '../tools/util';

export default {
    data() {
        return {
            defaultKw: '全部'
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
        fetchData(callBack) {
            const searchInfo = this.getSearchInfo();
            API.fetchKeyWorkds({
                kw: this.defaultKw,
                count: searchInfo.count,
                len: searchInfo.len
            }).then(res => {
                const data = {
                    kw: this.defaultKw,
                    data: mapImageUrl(res.data),
                    total: res.total,
                    count: searchInfo.count + res.len
                };
                this.$store.commit('UPDATE_SEARCH_RESULT', data);
                callBack && callBack instanceof Function && callBack();
            });
        },
        loadMore() {
            this.fetchData();
        },
        ...mapGetters(['getSearchInfo']),
        ...mapMutations(['UPDATE_SEARCH_RESULT'])
    },
    components: {
        waterFall: vueWaterfallEasy
    }
};
</script>

<style lang="postcss" scoped>
.vue-waterfall-asy-container {
    position: fixed !important;
}

.container {
    background: #abf3;
    backdrop-filter: blur(10px);
}
</style>
