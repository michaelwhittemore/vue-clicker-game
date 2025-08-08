<script setup lang="ts">
import { computed } from 'vue';
import { stateStorage } from '@/typescript/stateStorage';

const onClickHandler = () => {
    if (stateStorage.resources.ore < 10){
        console.warn('whoops, need more ore')
    }
   stateStorage.resources.ore-= 10;
   stateStorage.resources.steel++;
}
const notEnoughOre = computed(() => stateStorage.resources.ore < 10)
</script>

<template>
    <button @click="onClickHandler" :disabled="notEnoughOre"> Refine 10 ore into one steel </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>