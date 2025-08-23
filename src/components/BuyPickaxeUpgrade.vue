<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers'; 

// HERE!
// would like to do the refactoring to use composables https://vuejs.org/guide/reusability/composables#composables
// will need price to increase exponentially 
    
const onClickHandler = () => {
    gameStateStorage.resources.gold -= gameStateStorage.upgrades.pickaxe.price;
    gameStateStorage.upgrades.pickaxe.level++;
    activateNarrativeTrigger('hasUpgradedPickaxe');
    earnExperienceInSkill('trading', 5)
    // TODO - this currently is going up by an arbitrary, linear amount.
    // Perhaps I should either create a map or make it exponential?
    gameStateStorage.upgrades.pickaxe.price += 10;
    if (gameStateStorage.upgrades.pickaxe.requiredLevel){
        gameStateStorage.upgrades.pickaxe.requiredLevel.skillLevel += 3;
    }

}
const computedInsufficientGold = computed(() => {
    return gameStateStorage.resources.gold < gameStateStorage.upgrades.pickaxe.price;
    
})
</script>
<template>
    <button :disabled="computedInsufficientGold" :v-if="true" @click="onClickHandler"> Upgrade pickaxe to level {{ gameStateStorage.upgrades.pickaxe.level + 1 }} 
        (costs {{ gameStateStorage.upgrades.pickaxe.price }} {{ gameStateStorage.upgrades.pickaxe.resourceType }},
        <span v-if="gameStateStorage.upgrades.pickaxe.requiredLevel">requires {{ gameStateStorage.upgrades.pickaxe.requiredLevel.skill }} level 
            {{ gameStateStorage.upgrades.pickaxe.requiredLevel.skillLevel }} </span>
        )</button>
</template>