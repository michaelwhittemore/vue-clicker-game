<script setup lang="ts">
import { computed, ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
import PopUpText from '../PopUpText.vue';

const wasClickedTrigger = ref(false);

const onClickHandler = () => {
    activateNarrativeTrigger('hasRefinedOre');
    wasClickedTrigger.value = !wasClickedTrigger.value;
    // This should eventually be tied to an upgrade (maybe both are different upgrades?)
    // This will also mean the text needs to be changed in the template
    gameStateStorage.resources.ore -= 10;
    gameStateStorage.resources.steel++;
}
const notEnoughOre = computed(() => gameStateStorage.resources.ore < 10)
const computedTextForPopUp = computed(() => {
    // This will need different values when we add upgrades
    return `+1 Steel`;
})
</script>

<template>
    <button @click="onClickHandler" :disabled="notEnoughOre"> Refine 10 ore into one steel 
        <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger"/>
    </button>
</template>

<style>
/* button {
} */
</style>