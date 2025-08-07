<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
import type { ValidAutomatons, ValidResources } from '@/typescript/gameTypes';

// Conditionally render (I need to figure out when we can display them)
const props = defineProps<{
    automatonType: ValidAutomatons,
}>()
let costResource: ValidResources;
let costQuantity: Number;
switch (props.automatonType){
    case 'autominer':
        costResource = 'steel';
        costQuantity = 10;
        break;
    case 'autorefiner':
        costResource = 'steel';
        costQuantity = 20;
        break;
    default:
        console.error('Unknown automatonType')
        break;
}
const onClickHandler = () => {
    // need to check if we have enough resources
    if (stateStorage.resources.steel < 10) {
        console.warn('This should be a warning somewhere')

    }
    stateStorage.automatons.autoMiners++;
    stateStorage.resources.steel -= 10;
}
</script>

<template>
    <button @click="onClickHandler"> Build an {{ automatonType }} ({{ costQuantity }} {{ costResource }})</button>
    
</template>

<style>
button {
    /* background-color: red */
}
</style>