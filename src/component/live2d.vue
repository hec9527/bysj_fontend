<template lang="pug">
  div.container
    live2d(v-if="islive2d" :modelPath="modelPath" ref='l2dManges')
    div.live2d-panel
      dialogue(v-if="isDialogue" :customDialogue="customDialogue" ref='dialogue' :dialogueStyle='{backgroundColor:"#fff9"}')
      live2d(v-if="islive2d" :modelPath="modelPath" ref='l2dMange')
</template>

<script>
import custom from '../config/custom';

export default {
    name: 'app',
    data: () => ({
        modelPath: '',
        modelPaths: '',
        customDialogue: custom,
        toolsData: [
            { tabMsg: 'home', backgroundColor: '#ff0', show: true, position: 'left' },
            { tabMsg: 'dialogue', width: 280, customDialogue: custom, show: true, position: 'left' },
            { tabMsg: 'change', backgroundColor: '#add8e6', show: true, position: 'left' },
            { tabMsg: 'save', backgroundColor: 'green', show: true, position: 'left' },
            { tabMsg: 'about', backgroundColor: '#eb7a77', show: true, position: 'left' },
            { tabMsg: 'hide', backgroundColor: 'red', show: true, position: 'left' }
        ],
        islive2d: true,
        isDialogue: true
    }),
    mounted() {
        setInterval(() => {
            fetch('https://api.imjad.cn/hitokoto/?cat=&charset=utf-8&length=28&encode=json')
                .then(res => res.json())
                .then(data => {
                    // if (!this.isDialogue) {
                    //     let tool = this.$refs.tool.filter(item => {
                    //         return item.customDialogue;
                    //     });
                    //     if (tool && tool.length > 0) tool[0].showMessage(data.hitokoto);
                    // } else {
                    //     }
                    this.$refs.dialogue.showMessage(data.hitokoto);
                });
        }, 200000);
        this.modelPath = './model/Pio/model.json';
    },
    methods: {}
};
</script>

<style lang="stylus" scoped>
.container
  position relative
.tools-panel
  position fixed
  left 0
  bottom 0
  max-width 32px
.live2d-panel
  position fixed
  left: 0
  bottom: 0
</style>
