<template>
    <div class="container">
        <div class="tooltip-box">
            <h1>用户分享</h1>
            <p class="tips">
                网站的建设，并非一朝一夕能够完成的，在繁忙的工作和生活中压榨剩余时间来搭建网站，说起来容易做起来难，我需要你的
                <a href="https://github.com/hec9527/bysj_fontend">帮助</a>
            </p>
        </div>
        <div class="animation-box">
            <div class="animation-wrap">
                <div class="left">
                    <i class="el-icon-s-tools"></i>
                </div>
                <div class="right">
                    <i class="el-icon-setting"></i>
                </div>
            </div>
        </div>

        <!-- 大字报 -->
        <div class="building">
            <p>building...</p>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {}
};
</script>

<style scoped>
.container {
    position: relative;
    padding-top: 34px;
    background: #fff6;
    backdrop-filter: blur(10px);
}
.tips {
    text-align: center;
    line-height: 2rem;
    max-width: 800px;
    margin-top: 24px;
}
.building {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    margin-top: 550px;
    font-size: 36px;
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
}
.tooltip-box {
    margin-top: 80px;
    position: absolute;
    display: flex;
    width: 100%;
    color: #fff;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.animation-box {
    position: absolute;
    margin-top: 260px;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
}
.animation-wrap {
    position: relative;
    width: 500px;
    height: 300px;
    color: #fff;
}
.left {
    position: absolute;
    top: 30px;
    left: 170px;
    font-size: 70px;
    animation: rotate-right 7s linear infinite both;
}
.right {
    position: absolute;
    top: 30px;
    left: 200px;
    font-size: 180px;
    animation: rotate-left 17s linear infinite both;
}

@keyframes rotate-right {
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(360deg);
    }
}
@keyframes rotate-left {
    from {
        transform: rotateZ(360deg);
    }
    to {
        transform: rotateZ(0);
    }
}
</style>
