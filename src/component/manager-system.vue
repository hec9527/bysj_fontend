<template>
    <div class="container">
        <myUser v-if="active == '3-1'" />
        <myImage v-if="active == '3-2'" />
        <myLog v-if="active == '3-3'" />
        <myBoot v-if="active == '3-4'" />
    </div>
</template>

<script>
import user from './manager-user.vue';
import log from './manager-log.vue';
import images from './manager-images.vue';
import boot from './manager-boot.vue';

export default {
    props: {
        active: {
            type: String,
            required: true,
            default: '3-1'
        }
    },
    data: () => {
        return {
            //
        };
    },
    updated() {},
    components: {
        myUser: user,
        myLog: log,
        myImage: images,
        myBoot: boot
    }
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 0 !important;
}
</style>
