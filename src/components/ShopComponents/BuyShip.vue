<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

import { activateNarrativeTrigger, earnExperienceInSkill } from '@/typescript/gameHelpers';

const goldCost = 1500

const onClickHandler = () => {
    gameStateStorage.resources.gold -= goldCost;
    activateNarrativeTrigger('hasBoughtShip')
    earnExperienceInSkill('trading', 10)
    gameStateStorage.ship.isPurchased = true;
}
const computedSufficientGold = computed(() => gameStateStorage.resources.gold >= goldCost)
</script>
<template> 
    <button v-if="!gameStateStorage.ship.isPurchased" :disabled="!computedSufficientGold" @click="onClickHandler"> Buy Ship ({{goldCost}} Gold)</button>
</template>