<template>
    <div class="card-wrap">
        <div
            class="card-main"
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
</template>

<script>
export default {
    data() {
        return {
            //
        };
    },
    methods: {
        //
    }
};
</script>

<style lang="postcss" scoped>
/*  */
</style>
