<script setup lang="ts">
import { computed, ref, toRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger, earnExperienceInSkill } from '@/typescript/gameHelpers';
import PopUpText from '../PopUpText.vue';

const wasClickedTrigger = ref(false);

const oreInput = toRef(() => gameStateStorage.refineryState.oreInput)
const steelOutput = toRef(() => gameStateStorage.refineryState.steelOutput)

const onClickHandler = () => {
    activateNarrativeTrigger('hasRefinedOre');
    wasClickedTrigger.value = !wasClickedTrigger.value;
    gameStateStorage.resources.ore -= oreInput.value;
    gameStateStorage.resources.steel+= steelOutput.value;
    earnExperienceInSkill('manufacturing', 1)
}
const notEnoughOre = computed(() => gameStateStorage.resources.ore < oreInput.value)
const computedTextForPopUp = computed(() => {
    return `+${steelOutput.value} Steel`;
})
</script>

<template>
    <button @click="onClickHandler" :disabled="notEnoughOre"> 
        Refine {{ oreInput }} ore into {{ steelOutput}} steel 
        <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger"/>
    </button>
</template>
