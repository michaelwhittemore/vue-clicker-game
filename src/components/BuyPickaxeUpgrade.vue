<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
    // will need to add checks for if we should have the button enabled (probably tied to gold)
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

}
const computedInsufficientGold = computed(() => {
    return gameStateStorage.resources.gold < 10; // should have price variable instead 
    // we will need the price variable for the button text anyway - should it be a ref?
    // I think it will be a derived value?
})
</script>
<template>
    <button :disabled="computedInsufficientGold" :v-if="true" @click="onClickHandler"> Buy the pick upgrade </button>
</template>