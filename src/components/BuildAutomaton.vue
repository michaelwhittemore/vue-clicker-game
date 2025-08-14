<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import type { NarrativeTrigger } from '@/typescript/gameTypes';
import type { ValidAutomatons, ValidResources } from '@/typescript/gameTypes';

// Conditionally render (I need to figure out when we can display them) - 
// i.e. you can't build refiners until you level up enough
const props = defineProps<{
    automatonType: ValidAutomatons,
}>()
let costResource: ValidResources;
let costQuantity: number;
let narrativeTrigger: NarrativeTrigger;
let computedShouldDisplay: ComputedRef<boolean>;
switch (props.automatonType) {
    case 'autoMiner':
        costResource = 'steel';
        costQuantity = 10;
        narrativeTrigger = 'hasBuiltAutoMiner';
        computedShouldDisplay = computed(() => true);
        break;
    case 'autoRefiner':
        costResource = 'steel';
        costQuantity = 20;
        narrativeTrigger = 'hasBuiltAutoRefiner'
        computedShouldDisplay = computed(() => gameStateStorage.skills.robotics.level >= 1);
        break;
    default:
        console.error('Unknown automatonType')
        break;
}
const computedHasEnoughResources = computed(() => {
    return gameStateStorage.resources[costResource] < costQuantity
})
const onClickHandler = () => {
    activateNarrativeTrigger(narrativeTrigger);
    gameStateStorage
    gameStateStorage.automatons[props.automatonType]++;
    gameStateStorage.resources[costResource] -= costQuantity;
    // here! - adding exp for testing
    earnExperienceInSkill('robotics', 2)
    
}
</script>

<template>
    <button @click="onClickHandler" :disabled="computedHasEnoughResources" v-if="computedShouldDisplay">
        Build an {{ automatonType }} ({{ costQuantity }} {{ costResource }})</button>

</template>

<style>
button {
    /* background-color: red */
}
</style>