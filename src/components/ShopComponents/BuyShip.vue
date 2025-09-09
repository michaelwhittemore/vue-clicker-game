<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

import { activateNarrativeTrigger, earnExperienceInSkill } from '@/typescript/gameHelpers';

const goldCost = 1500

const onClickHandler = () => {
    gameStateStorage.resources.gold -= goldCost;
    activateNarrativeTrigger('hasBoughtShip')
    earnExperienceInSkill('trading', 10)
    // HERE! need to add the ship to the gameStateStorage and stop displaying it in the shop
    gameStateStorage.ship.isPurchased = true;
}
const computedSufficientGold = computed(() => gameStateStorage.resources.gold >= goldCost)
</script>
<template> 
    <button v-if="!gameStateStorage.ship.isPurchased" :disabled="!computedSufficientGold" @click="onClickHandler"> Buy Ship ({{goldCost}} Gold)</button>
</template>