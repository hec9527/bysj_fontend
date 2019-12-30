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
                    autofocus
                />
                <span class="search-btn">
                    <svg
                        focusable="false"
                        fill="#4285f4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        ></path>
                    </svg>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped src="./index.css"></style>
<script scoped src="./index.js"></script>
<style src="@/assets/css/animation.css"></style>
