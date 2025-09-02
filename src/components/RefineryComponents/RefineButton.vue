<script setup lang="ts">
import { computed, ref, toRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
import PopUpText from '../PopUpText.vue';

const wasClickedTrigger = ref(false);

const oreInput = toRef(() => gameStateStorage.refineryState.oreInput)
const steelOutput = toRef(() => gameStateStorage.refineryState.steelOutput)

const onClickHandler = () => {
    activateNarrativeTrigger('hasRefinedOre');
    wasClickedTrigger.value = !wasClickedTrigger.value;
    // This should eventually be tied to an upgrade (maybe both are different upgrades?)
    // This will also mean the text needs to be changed in the template
    gameStateStorage.resources.ore -= oreInput.value;
    gameStateStorage.resources.steel+= steelOutput.value;
}
const notEnoughOre = computed(() => gameStateStorage.resources.ore < oreInput.value)
const computedTextForPopUp = computed(() => {
    // This will need different values when we add upgrades
    return `+${steelOutput.value} Steel`;
})
</script>

<template>
    <button @click="onClickHandler" :disabled="notEnoughOre"> 
        Refine {{ oreInput }} ore into {{ steelOutput}} steel 
        <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger"/>
    </button>
</template>
