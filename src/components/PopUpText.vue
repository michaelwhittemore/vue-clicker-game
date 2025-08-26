<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
// Note that define props takes in the constructor hence 'String' vs 'string'
const props = defineProps({
    textForPopUp: String,
    garbageTrigger: Boolean
})
let animatedClassBool = ref(false)
watch(() => props.garbageTrigger, async () => {
    console.log(props.garbageTrigger)
    // maybe we try using nextTick
    // https://vuejs.org/guide/extras/animation
    animatedClassBool.value = false;
    await nextTick();
    animatedClassBool.value = true;

})

// --------------animation thoughts --------------
// maybe we start with opacity?
// It would be nice for the popup to start at slightly different palces, look into randomization
// different colors? maybe gold is gold?? - passed in via props??
</script>
<template>
    <!-- The relative container is necessary for the element to have an ancestor but not reserved space-->
    <div class="popUpContainer">
        <!-- <div v-if="props.garbageTrigger" class="popUp outlinedText"> {{ props.textForPopUp }} </div> -->
        <!-- previously had animatedPopUp hard coded i -->
        <!-- <div class="popUp outlinedText" :class="{ animatedPopUp: animatedClassBool}">  -->
        <div class="popUp outlinedText animatedPopUp" v-if="animatedClassBool"> 
            {{ props.textForPopUp }} </div>
    </div>


</template>
<style scoped>
.popUp {
    color: green;
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