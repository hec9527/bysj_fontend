<template>
    <div class="wrap">
        <!-- 用户上传数据展示 -->
        <div class="content">
            <!-- 纯展示组件 -->
            <uploaded v-if="userUpload.length > 0" :data="[]"></uploaded>
        </div>
    </div>
</template>

<script>
import uploaded from './uploaded.vue';

export default {
    data: () => {
        return {
            userUpload: []
        };
    },
    methods: {
        //
    },
    components: {
        uploaded
    }
};
</script>

<style scoped>
.wrap {
    position: relative;
    width: 100%;
    height: 100%;
}
.content {
    position: relative !important;
    width: 100%;
    height: calc(100vh - 105px) !important;
    background: #fff;
    top: 55px;
    border-radius: 4px;
    overflow-x: auto;
    overflow-y: auto;
}
.content:empty::after {
    content: '这家伙很懒，什么都没有留下';
    top: 0;
    left: 0;
    position: absolute;
    font-size: 24px;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    color: #ccc;
}
</style>
