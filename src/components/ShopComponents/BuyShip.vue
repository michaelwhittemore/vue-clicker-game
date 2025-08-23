<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { computed } from 'vue';

const goldCost = 1500

const onClickHandler = () => {
    console.warn('You Are Winner')
}
const computedSufficientGold = computed(() => gameStateStorage.resources.gold >= goldCost)
</script>
<template> 
    <button :disabled="!computedSufficientGold" @click="onClickHandler"> Buy Ship ({{goldCost}} Gold)</button>
</template>