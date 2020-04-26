<template>
    <div class="container">
        <div class="live2d-panel">
            <dialogue
                v-if="isDialogue"
                ref="dialogue"
                :customDialogue="customDialogue"
                :dialogueStyle="{ backgroundColor: '#fff9' }"
            />
            <live2d v-if="islive2d" :modelPath="modelPath" ref="l2dMange" />
        </div>
    </div>
</template>

<script>
import custom from '../config/custom';

export default {
    data: () => ({
        modelPath: './model/Pio/model.json',
        customDialogue: custom,
        islive2d: true,
        isDialogue: true
    }),
    mounted() {
        setInterval(() => {
            fetch('https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json')
                .then(res => res.json())
                .then(data => {
                    try {
                        this.$refs.dialogue.showMessage(data.hitokoto);
                    } catch (error) {
                        return false;
                    }
                });
        }, 10000);
    },
    methods: {}
};
</script>

<style scoped>
.container {
    position: relative;
}
.live2d-panel {
    position: fixed;
    left: 0;
    bottom: 0;
}
</style>
