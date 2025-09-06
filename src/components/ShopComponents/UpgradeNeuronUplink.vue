<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger, earnExperienceInSkill, getTotalLevel } from '@/typescript/gameHelpers';
// HERE!


// We will also need to then update the gameLoop to increase the XP earned
const onClickHandler = () => {
    gameStateStorage.resources.gold -= gameStateStorage.upgrades.neuronUplink.price;
    gameStateStorage.upgrades.neuronUplink.level++;
    activateNarrativeTrigger('hasUpgradedNeuronUplink');
    earnExperienceInSkill('trading', 5)

    gameStateStorage.upgrades.neuronUplink.price += 50;
    gameStateStorage.upgrades.neuronUplink.requiredLevel!.skillLevel += 4;
}

const computedSufficientGoldAndLevel = computed(() => {
    return gameStateStorage.resources.gold >= gameStateStorage.upgrades.neuronUplink.price &&
        getTotalLevel() >= gameStateStorage.upgrades.neuronUplink.requiredLevel!.skillLevel;
})
</script>
<template>
    <button :disabled="!computedSufficientGoldAndLevel" @click="onClickHandler">
        Upgrade Neuron Uplink to level {{ gameStateStorage.upgrades.neuronUplink.level + 1}}
        ({{ gameStateStorage.upgrades.neuronUplink.price }} gold, requires total level 
        {{ gameStateStorage.upgrades.neuronUplink.requiredLevel?.skillLevel }})
    </button>
    
</template>