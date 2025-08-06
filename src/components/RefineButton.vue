<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
// here! 
// Will need to have the invalid button class
const onClickHandler = () => {
    if (stateStorage.resources.ore < 10){
        console.warn('whoops, need more ore')
    }
   stateStorage.resources.ore-= 10;
   stateStorage.resources.steel++; 
}
</script>

<template>
    <button @click="onClickHandler"> Refine 10 ore into one steel </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>