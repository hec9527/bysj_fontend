<template>
    <div class="container">
        <waterfall
            :arr="search.data"
            srcKey="url"
            :keyWorld="search.kw"
            :total="search.total"
            :loadMore="loadMore"
        ></waterfall>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import waterfall from '../component/waterfall-flow';

export default {
    data() {
        return {
            search: { data: [] }
        };
    },
    mounted() {
        this.search = this.getSearchInfo();
        if (!this.search.kw) {
            window.location.hash = '/home';
            this.$destroy();
        }
    },
    methods: {
        loadMore() {
            console.log('load    more .....');
        },
        ...mapGetters(['getSearchInfo'])
    },
    components: {
        waterfall
    }
};
</script>

<style lang="postcss" scoped>
.vue-waterfall-asy-container {
    position: fixed !important;
}

.container {
    /* TODO 后期删除背景T */
    background: #abf;
}
</style>
