<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import type { ValidAutomatons, ValidResources } from '@/typescript/gameTypes';

// Conditionally render (I need to figure out when we can display them) - 
// i.e. you can't build refiners until you level up enough
const props = defineProps<{
    automatonType: ValidAutomatons,
}>()
let costResource: ValidResources;
let costQuantity: number;
switch (props.automatonType) {
    case 'autoMiner':
        costResource = 'steel';
        costQuantity = 10;
        break;
    case 'autoRefiner':
        costResource = 'steel';
        costQuantity = 20;
        break;
    default:
        console.error('Unknown automatonType')
        break;
}
const computedHasEnoughResources = computed(() => {
    return gameStateStorage.resources[costResource] < costQuantity
})
const onClickHandler = () => {
    gameStateStorage.narrativeTriggers.hasBuiltAutoMiner = true;
    gameStateStorage.automatons[props.automatonType]++;
    gameStateStorage.resources[costResource] -= costQuantity;
    // here! - adding exp for testing
    // Maybe this should reward more?
    gameStateStorage.skills.electronics.experience++
}
</script>

<template>
    <button @click="onClickHandler" :disabled="computedHasEnoughResources">
        Build an {{ automatonType }} ({{ costQuantity }} {{ costResource }})</button>

</template>

<style>
button {
    /* background-color: red */
}
</style>