<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';

const onClickHandler = () => {
    activateNarrativeTrigger('hasRefinedOre');
    gameStateStorage.resources.ore -= 10;
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