<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

const onClickHandler = () => {
    if (gameStateStorage.resources.ore < 10){
        console.warn('whoops, need more ore')
    }
   gameStateStorage.resources.ore-= 10;
   gameStateStorage.resources.steel++;
}
const notEnoughOre = computed(() => gameStateStorage.resources.ore < 10)
</script>

<template>
    <button @click="onClickHandler" :disabled="notEnoughOre"> Refine 10 ore into one steel </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>