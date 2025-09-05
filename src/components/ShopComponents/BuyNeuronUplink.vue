<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { computed } from 'vue';
import { activateNarrativeTrigger, getTotalLevel } from '@/typescript/gameHelpers';

// Do we still need the upgrade interface? - maybe that's too specific?

const onClickHandler = () => {
    gameStateStorage.neuronUplink.isPurchased = true;
    // Will need to subtract the cost
    
    activateNarrativeTrigger('hasBuiltNeuronUplink')
}
const goldCost = 100
const requiredTotalLevel = 10
const computedSufficientTotalLevel = computed(() => {
    return getTotalLevel() >= 10; 
    // return true; // This should actually be the sum of levels
})
const computedSufficientGold = computed(() => {
    return gameStateStorage.resources.gold >= goldCost;
})
</script>
<template>
    <button :disabled="!(computedSufficientTotalLevel && computedSufficientGold)" @click="onClickHandler">
    Buy Neuron Uplink ({{ goldCost }} Gold, requires {{ requiredTotalLevel }} total level)</button>
    
</template>