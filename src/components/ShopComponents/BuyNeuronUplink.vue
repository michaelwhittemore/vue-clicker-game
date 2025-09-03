<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { computed } from 'vue';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';

// Should we treat this the same way we do gold miners where it's a trickle?
// Will need to add an upgrade
// Do we still need the upgrade interface? - maybe that's too specific?

// TODO - need to add to the game loop
    // - we will need to store which skill is currently selected - let's start with mining

const onClickHandler = () => {
    gameStateStorage.neuronUplink.isPurchased = true;
    // Will need to subtract the cost
    activateNarrativeTrigger('hasBuiltNeuronUplink')
    
}

const computedShouldDisplay = computed(() => {
    return true; // This should actually be the sum of levels
})
const computedSufficientGold = computed(() => {
    return true; // TODO
})
</script>
<template>
    <button @click="onClickHandler">I'm the neuron uplink </button>
    
</template>