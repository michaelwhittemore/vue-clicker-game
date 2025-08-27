<script setup lang="ts">
import { computed, ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill } from '@/typescript/gameHelpers';
import PopUpText from '../PopUpText.vue';
// We we need to calculate the rate (maybe 100 to 1)
// We need to modify things so that we can have this easily exposed - specifically the shop
// maybe we tie this to being more general, i.e. allow us to sell either ore or steel
// TODO - This rate may be wildly off, should try to rebalance at some point
// TODO - this should improve with trading - will need the prices to be computed - or alternatively
// tied to gameState
// ore price should be worse than the refined value i.e. if steel is 100, ore should be greater than 1000
const wasClickedTrigger = ref(false)
const steelPrice = 100;
const onClickSell = () => {
    wasClickedTrigger.value = !wasClickedTrigger.value;
    gameStateStorage.resources.steel -= steelPrice
    gameStateStorage.resources.gold++;
    
    earnExperienceInSkill('trading', 1);
}
const computedTextForPopUp = computed(() => {
    return `+1 Gold`
})
const computedEnoughToEnable = computed(() => gameStateStorage.resources.steel >= steelPrice)
</script>
<template>
    <button  @click="onClickSell" :disabled="!computedEnoughToEnable">
        Sell {{ steelPrice }} steel for one gold
        <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger"/>
    </button>
</template>