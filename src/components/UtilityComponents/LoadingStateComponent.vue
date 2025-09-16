<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    duration: number, // in ms
    buttonText: string,
}>()
const isLoading = ref(false);

const onClick = () => {
    isLoading.value = true;

    console.warn('clicked')
    setTimeout(() => {
        // need to dispatch the event
        isLoading.value = false
    }, props.duration * 1000)
    // will need to set the disabled flag 
}

const animationDurationString = `${props.duration}s`
// Will need to take in a level based disabled ref from parent component
// Need to line up times (have a different one in the onclick timeout and the animation)
</script>
<template>
    <button @click="onClick" class="outerBar" :disabled="isLoading" >
        <div class="barText">
            {{ buttonText }}
        </div>
        <div class="innerBar" :class="{animatedLoad: isLoading}"> </div>
        <!-- <div class="barText centeredText"> {{ gameStateStorage.skills[skillName].experience +
            '/' + gameStateStorage.skills[skillName].targetExperience }} ({{ computedPercentage + '%' }}) </div>
        <div class="innerBar" :style="{ width: computedPercentage + '%' }"> </div> -->
    </button>
</template>

<style scoped>
.barText {
    width: 100%;
    padding: 2px;
    z-index: 1;
}

.outerBar {
    position: relative;
    height: auto;
    margin: .1em;
    width: 95%;
    background-color: blanchedalmond;
    border-style: solid;
    border-color: black;
    padding: 0px
}

.outerBar:disabled {
    color: dimgray
}

.outerBar:hover {
    border-color: dimgray;
}

.innerBar {
    opacity: 50%;
    position: absolute;
    width: 0%;
    top: 0px;
    height: 100%;
    background-color: red;
   
}
.animatedLoad {
     animation-name: progressBar;
     animation-duration: v-bind(animationDurationString);
     animation-timing-function: linear;

}
@keyframes progressBar {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}
</style>