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
                <div class="search-btn">
                    <span @click="search">
                        <svg focusable="false" fill="#5caef1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data: () => {
        return {
            searchValue: ''
        };
    },
    //TODO 更换首页搜索logo图标
    methods: {
        search() {
            this.$store.commit('UPDATE_SEARCH_INFO', this.searchValue);
            window.location.hash = '/search';
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
    height: 400px;
    display: flex;
    justify-content: center;
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

.search-btn {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 24px;
    height: 24px;
    right: 20px;
    margin: auto;
    cursor: pointer;
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
</style>
