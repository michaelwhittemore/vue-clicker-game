<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
import type { validAutomatons } from '@/typescript/gameTypes';
// Maybe we don't need to pass in anything other than the type?
// Can do the logic here
// Conditionally render (I need to figure out when we can display them)
const props = defineProps<{
    automatonType: validAutomatons,
}>()
const onClickHandler = () => {
    // need to check if we have enough resources
    // Eventually we will have some object with data on prices are requirements
    if (stateStorage.resources.steel < 10) {
        console.warn('This should be a warning somewhere')

    }
    stateStorage.automatons.autoMiners++;
    stateStorage.resources.steel -= 10;
}
</script>

<template>
    <button @click="onClickHandler"> Build an autominer (10 steel) {{ automatonType }}</button>
    
</template>

<style>
button {
    /* background-color: red */
}
</style>