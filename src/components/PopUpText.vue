<script setup lang="ts">
import { watch, ref, nextTick, reactive } from 'vue';
// Note that define props takes in the constructor hence 'String' vs 'string'
const props = defineProps<{
    textForPopUp: string,
    wasClickedTrigger: boolean,
    color?: string,
}>()
let animatedClassBool = ref(false)
watch(() => props.wasClickedTrigger, async () => {
    // TODO - the RNG position part goes here?
    animatedClassBool.value = false;
    await nextTick();
    animatedClassBool.value = true;

})
const styleObject = reactive({
  color: props.color || 'green',
})

</script>
<template>
    <!-- The relative container is necessary for the element to have an ancestor but not reserved space-->
    <div class="popUpContainer">
        <div class="popUp outlinedText animatedPopUp" v-if="animatedClassBool" :style="styleObject">
            {{ props.textForPopUp }} </div>
    </div>
</template>

<style scoped>
.popUp {
    font-weight: bold;
    position: absolute;
    font-size: 150%;
    bottom: 10px;
    right: -15px;
}

.popUpContainer {
    position: relative;
}

/* animation ---------------- */
.animatedPopUp {
    animation-duration: 2s;
    animation-name: rotateAndFadeAway;
    animation-fill-mode: forwards
}

@keyframes rotateAndFadeAway {
    0% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }

    100% {
        transform: translateX(50px) translateY(-50px)rotate(45deg);
        opacity: 0;
    }
}
</style>