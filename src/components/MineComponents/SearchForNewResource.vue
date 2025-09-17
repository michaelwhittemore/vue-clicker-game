<script setup lang="ts">
import { ref, computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
// Will need a narrative for both before and after. 
// Will need to be disabled when it's loading and based on level
// HERE!
// will need to take advantage of parent evening
// will want to pass in should be enabled and handle the resolutions in this component

const startingLevel = 3;
const startingDuration = 3; // In seconds
const requiredTime = ref(startingDuration); // duration may change? 
const requiredLevel = ref(startingLevel)
const computedHasSufficientLevel = computed(() => {
    return gameStateStorage.skills.mining.level >= requiredLevel.value; // TODO
})
const computedText = computed(() => {
    return `Search for new resources (mining ${requiredLevel.value}, takes ${requiredTime.value} seconds)`
})

const onEvent = () => {console.warn('event')} 

</script>

<template> 
    <LoadingStateComponent @finished-loading="onEvent" :duration="requiredTime" :button-text="computedText"/> 
</template>