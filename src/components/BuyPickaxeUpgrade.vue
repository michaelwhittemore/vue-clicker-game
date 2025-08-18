<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
// Will need to modify the price and information on level
// will need a handler for on click to include narrativeTrigger

// HERE!
// also need to figure out if we display the shop at all.
// - This will happen at an outer component 
// will also need to increase ore harvest per click somewhere - in generate resources
// would like to do the refactoring to use composables https://vuejs.org/guide/reusability/composables#composables
// will need to store pickaxe level
// - let's add a 'upgrades' field to the state storage
// will need price to increase exponentially 
    
const onClickHandler = () => {
    console.warn('clicked')
    gameStateStorage.resources.gold -= gameStateStorage.upgrades.pickaxe.price;
    gameStateStorage.upgrades.pickaxe.level++;
    // should adjust the price. maybe it uses a map? 
    // might also need a required level??
}
const computedInsufficientGold = computed(() => {
    return gameStateStorage.resources.gold < gameStateStorage.upgrades.pickaxe.price;
    
})
</script>
<template>
    <button :disabled="computedInsufficientGold" :v-if="true" @click="onClickHandler"> Upgrade pickaxe to level {{ gameStateStorage.upgrades.pickaxe.level + 1 }} 
        ({{ gameStateStorage.upgrades.pickaxe.price }} gold)</button>
</template>