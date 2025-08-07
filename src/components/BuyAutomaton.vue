<script setup lang="ts">
import { computed } from 'vue';
import { stateStorage } from '@/typescript/stateStorage';
import type { ValidAutomatons, ValidResources } from '@/typescript/gameTypes';

// Conditionally render (I need to figure out when we can display them) - 
// i.e. you can't build refiners until you level up enough
const props = defineProps<{
    automatonType: ValidAutomatons,
}>()
let costResource: ValidResources;
let costQuantity: number;
switch (props.automatonType){
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
    return stateStorage.resources[costResource] < costQuantity
})
const onClickHandler = () => {
    // need to check if we have enough resources
    stateStorage.automatons.autoMiners++;
    stateStorage.resources.steel -= 10;
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