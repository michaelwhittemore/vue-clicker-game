<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

import { activateNarrativeTrigger } from '@/typescript/gameHelpers';

const goldCost = 1500

const onClickHandler = () => {
    gameStateStorage.resources.gold -= goldCost;
    console.warn('You Are Winner!') 
    activateNarrativeTrigger('hasBoughtShip')
}
const computedSufficientGold = computed(() => gameStateStorage.resources.gold >= goldCost)
</script>
<template> 
    <button :disabled="!computedSufficientGold" @click="onClickHandler"> Buy Ship ({{goldCost}} Gold)</button>
</template>