<template>
    <div class="container">
        <!-- 右侧导航条 -->
        <div class="segements">
            <ul>
                <li class="dot dot-this"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
                <li class="dot"></li>
            </ul>
        </div>

        <!-- 单页滚动  -- 整屏滚动 -->
        <section class="section">
            <footer class="footer">
                并西法尼亚大学的教授
            </footer>
        </section>
        <section>
            <footer class="footer">
                无语的我们
            </footer>
        </section>

        <!-- 加载动画 -->
        <div class="loading"></div>
    </div>
</template>

<script>
// JS
</script>

<style scoped>
.section {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url(http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);
    background-size: cover;
}

.segements {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 35px;
    width: 10px;
    height: auto;
    min-height: 150px;
    z-index: 2;
}

.segements .dot {
    position: relative;
    width: 10px;
    height: 10px;
    padding: 3px;
    background: #fff;
    box-shadow: 0 0 8px 2px #333;
    border-radius: 100%;
    cursor: pointer;
    margin-top: 100%;
}

.segements .dot.dot-this {
    background: #333;
    box-shadow: 0 0 8px 2px #fff;
}

.section > .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: left;
    padding: 15px;
    text-shadow: 0 0 5px #000000;
    color: #fff;
}
</style>

<style scoped src="@/assets/css/animation.css"></style>
