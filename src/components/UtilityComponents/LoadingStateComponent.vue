<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps<{
    duration: number, // in seconds
    buttonText: string,
    shouldDisable: boolean,
}>()
const emit = defineEmits(['finishedLoading'])
const isLoading = ref(false);

const loadingPercentage = ref(0)
let timeElapsed = 0;
const tickRate = 100 // in milliseconds
const animationTick = (() => {
  timeElapsed += tickRate;
  loadingPercentage.value = (timeElapsed / (props.duration * 1000)) * 100;
})

const onClick = () => {
    isLoading.value = true;
    timeElapsed = 0;
    const animationInterval = setInterval(animationTick, tickRate)

    setTimeout(() => {
        clearInterval(animationInterval)
        isLoading.value = false
        emit('finishedLoading')
        loadingPercentage.value = 0;
    }, props.duration * 1000)
}

const animationDurationString = computed(() => `${props.duration}s`)
// Will need to take in a level based disabled ref from parent component
// Need to line up times (have a different one in the onclick timeout and the animation)
</script>
<template>
    <button @click="onClick" class="outerBar" :disabled="isLoading || shouldDisable" >
        <div class="barText">
            {{ buttonText }}
        </div>
        <!-- <div class="innerBar" :class="{animatedLoad: isLoading}"> </div> -->
         <div class="innerBar" :style="{ 'width': loadingPercentage + '%' }"> </div>
        <slot></slot>
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
    top: 0px;
    height: 100%;
    background-color: red;

}
</style>
