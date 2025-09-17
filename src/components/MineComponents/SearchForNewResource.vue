<script setup lang="ts">
import { ref, computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
// Will need a narrative for both before and after. 
// Will need to be disabled when it's loading and based on level
// will want to pass in should be enabled and handle the resolutions in this component

//Maybe future resources have a percent change of succeeding? - maybe it scales with something?
const startingLevel = 3;
const startingDuration = 3; // In seconds
const requiredTime = ref(startingDuration);
const requiredLevel = ref(startingLevel)
const computedHasSufficientLevel = computed(() => {
    return gameStateStorage.skills.mining.level >= requiredLevel.value;
})
const computedText = computed(() => {
    return `Search for new resources (mining ${requiredLevel.value}, takes ${requiredTime.value} seconds)`
})

const onEvent = () => {
    gameStateStorage.resources.silicon = 0;
    // HERE! will need to do something about actually unlocking the resource? 
        // Probably add to the gameStateStorage
    // Will probably have a new mining button in the miningTab
    // Will have a v-if dependant on if it exists on gameStateStorage
    // If it succeeds, we will need to update requiredTime and requiredLevel
    // Still need to add the externalDisable prop to the loading State component
    console.warn('event')
} 

</script>

<template> 
    <LoadingStateComponent @finished-loading="onEvent"
     :duration="requiredTime" :button-text="computedText" :should-disable="!computedHasSufficientLevel"/> 
</template>