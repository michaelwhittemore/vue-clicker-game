<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    duration: number, // in ms
    buttonText: string,
}>()
const isDisabled = ref(false);

const onClick = () => {
    isDisabled.value = true;

    console.warn('clicked')
    setTimeout(() => {
        // need to dispatch the event
        isDisabled.value = false
    }, props.duration)
    // will need to set the disabled flag 
}

// Will need to do something about it looking different on hover and disabled 
// maybe grey out text and border??

</script>
<template> 
    <button @click="onClick" class="outerBar" :disabled="isDisabled">
        <div class="barText">
            {{ buttonText }}
        </div>
        <!-- <div class="barText centeredText"> {{ gameStateStorage.skills[skillName].experience +
            '/' + gameStateStorage.skills[skillName].targetExperience }} ({{ computedPercentage + '%' }}) </div>
        <div class="innerBar" :style="{ width: computedPercentage + '%' }"> </div> -->
    </button>
</template>

<style scoped>
.barText {
    width: 100%;
    padding: 2px;
    /* position: absolute; */
    /* top: 0px; */
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
}
.outerBar:disabled {
    color: dimgray
}

 .outerBar:hover {
    border-color: dimgray;
}

.innerBar {
    position: absolute;
    top: 0px;
    height: 100%;
    background-color: #b2d2e3;
}
 </style>