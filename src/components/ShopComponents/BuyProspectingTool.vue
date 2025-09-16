<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { prospectingToolData } from '@/typescript/gameConstants/prospectingToolData';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
const { purchasePrice } = prospectingToolData;
// What triggers this once you've purchased it? 
// Oh remember that this tool maybe gives a boost to gold ore percentage chance. - temporary boosts in general
// but where to display it in the UI? maybe in the mine location??
// I think we will add it to the mine location

const onClick = () => {
    gameStateStorage.prospectingTool.isPurchased = true;
    activateNarrativeTrigger('hasPurchasedProspectingTool');
    gameStateStorage.resources.gold -= purchasePrice;
}
</script>
<template>
    <button @click="onClick" v-if="!gameStateStorage.prospectingTool.isPurchased" :disabled="purchasePrice > gameStateStorage.resources.gold"> 
        Buy Quantum Dowsing Rod ({{ purchasePrice }} gold)</button>
</template>