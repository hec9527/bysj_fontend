<template>
    <div class="container flex-center">
        <div class="bg"></div>
        <div class="cover animation fead-up">
            <div class="mask animation move"></div>
            <div class="search-box">
                <input
                    class="search-input"
                    type="text"
                    placeholder="分类/标签/用户名"
                    v-model.trim.lazy="searchValue"
                />
                <span class="search-btn" @click="search">
                    <svg focusable="false" fill="#4285f4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        ></path>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store';

export default {
    data: () => {
        return {
            searchValue: ''
        };
    },
    methods: {
        search: function() {
            // this.$store.commit('SEARCH_KEYWORDS', this.searchValue);
            store.dispatch('SEARCH_KEYWORDS', this.searchValue);
        }
    }
};
</script>

<style scoped>
.bg {
    background: url('..//assets/image/bg-home.jpg');
    background-size: cover;
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    filter: blur(10px);
    z-index: -1;
}

.search-box {
    width: 200%;
    transform: translateX(-25%);
    height: 50px;
    margin-bottom: 250px;
    margin-top: 15px;
    position: relative;
}

.search-input {
    color: #000;
    margin-top: 24px;
    width: 100%;
    font-size: 16px;
    height: inherit;
    padding: 7px 55px 7px 25px;
    outline: none;
    border-radius: 25px;
    border: none;
}

.search-input:focus {
    color: steelblue;
}

.search-btn {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 15px;
    top: 34px;
    cursor: pointer;
}

.mask {
    width: 288px;
    height: 162px;
    background-image: url('..//assets/image/bg-home.jpg');
    background-size: cover;
    mask: url('..//assets/svg/home-dji.svg');
    mask-size: cover;
}
</style>

<style src="@/assets/css/animation.css"></style>
