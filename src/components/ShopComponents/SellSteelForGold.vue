<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill } from '@/typescript/gameHelpers';
// We we need to calculate the rate (maybe 100 to 1)
// We need to modify things so that we can have this easily exposed - specifically the shop
// maybe we tie this to being more general, i.e. allow us to sell either ore or steel
// TODO - This rate may be wildly off, should try to rebalance at some point
// TODO - this should improve with trading - will need the prices to be computed - or alternatively
// tied to gameState
// ore price should be worse than the refined value i.e. if steel is 100, ore should be greater than 1000
const steelPrice = 100;
const onClickSell = () => {
    gameStateStorage.resources.steel -= steelPrice
    gameStateStorage.resources.gold++;
    // need to get trade experience
    earnExperienceInSkill('trading', 1);
}
const computedEnoughToEnable = computed(() => gameStateStorage.resources.steel >= steelPrice)
</script>
<template>
    <button  @click="onClickSell" :disabled="!computedEnoughToEnable">Sell {{ steelPrice }} steel for one gold</button>
</template>