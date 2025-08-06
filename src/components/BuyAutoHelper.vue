<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
// This should probably have some props (like resource type)
const onClickHandler = () => {
    // need to check if we have enough resources
    // Eventually we will have some object with data on prices are requirements
    if (stateStorage.resources.steel < 10 ){
        console.warn('This should be a warning somewhere')

    }
   stateStorage.automatons.autoMiners++;
   stateStorage.resources.steel -= 10;
}
</script>

<template>
    <button @click="onClickHandler"> Build an autominer (10 steel) </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>