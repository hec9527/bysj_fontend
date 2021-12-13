<template>
    <div class="container flex-center">
        <div class="search search-cover animation fead-up">
            <div class="search search-mask animation move"></div>
            <div class="search search-box">
                <input
                    class="search search-input"
                    type="text"
                    placeholder="分类/标签/用户名"
                    v-model.trim="searchValue"
                    @keydown.enter="search"
                />

                <div class="btn-box">
                    <div>
                        <span title="智能识图" @click="showImageUpload = !showImageUpload">
                            <i class="el-icon-camera"></i>
                        </span>
                    </div>
                    <div>
                        <span title="搜索关键字" @click="search">
                            <i class="el-icon-search"></i>
                        </span>
                    </div>
                </div>
            </div>
            <el-upload
                v-if="showImageUpload"
                class="upload-image"
                accept=".jpg,.jpeg,.png,.bmp,.gif"
                @on-success="loadSuccess"
                @on-error="loadError"
                @on-progress="uploading"
                :auto-upload="true"
                drag
                :action="imageLoadAction"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
// import API from '../API';
import URL from '../API/urls';
import { Notification } from 'element-ui';

export default {
    data: () => {
        return {
            searchValue: '',
            showImageUpload: false,
            imageLoadAction: URL.IMAGE_IDENTIFY
        };
    },
    //TODO 更换首页搜索logo图标
    methods: {
        search() {
            this.$store.commit('UPDATE_SEARCH_INFO', this.searchValue);
            window.location.hash = '/search';
        },
        loadSuccess() {
            Notification.success('图片上传成功');
        },
        loadError() {
            Notification.error('图片上传失败');
        },
        uploading() {
            Notification.info('文件正在上传');
        },
        ...mapMutations(['UPDATE_SEARCH_INFO'])
    }
};
</script>

<style scoped>
.container {
    backdrop-filter: blur(10px);
}

.search.search-cover {
    margin-top: -15%;
    width: 650px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.search.search-mask {
    width: 288px;
    height: 162px;
    background-image: url('../assets/image/bg-home.jpg');
    background-size: cover;
    mask: url('../assets/svg/home-dji.svg');
    mask-size: cover;
}

.search.search-box {
    margin-top: 55px;
    width: 100%;
    height: 56px;
    position: relative;
}

.search.search-input {
    width: 100%;
    height: inherit;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.1em;
    padding: 7px 55px 7px 25px;
    border-radius: 25px;
    background: #abf3;
    box-shadow: 0 0 3 3 #fff;
}

.search-input:focus {
    color: #5caef1;
}

.btn-box {
    position: absolute;
    height: 56px;
    width: 90px;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.btn-box div {
    cursor: pointer;
    color: #ccc;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px !important;
}

input::-webkit-input-placeholder {
    color: #abf7;
}
input::-moz-input-placeholder {
    color: #abf7;
}
input::-ms-input-placeholder {
    color: #abf7;
}

.upload-image {
    position: absolute;
    bottom: -80%;
}
</style>
