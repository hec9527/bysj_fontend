<template>
    <section class="section" :style="{ background: bgsrc }">
        <footer class="footer">
            {{ title }}
        </footer>
    </section>
</template>

<script>
export default {
    name: 'Section',
    props: {
        bgsrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.section {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url(http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp);
    background-size: cover;
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
    backdrop-filter: blur(5px);
    user-select: text;
    cursor: text;
}
</style>
