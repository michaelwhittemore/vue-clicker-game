<script setup lang="ts">
import { ref, computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { narrativeTriggersToText } from '@/typescript/gameConstants/narrativeTriggersToText';
import type { ValidResources, ValidSkills } from '@/typescript/gameTypes';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import PopUpText from '../PopUpText.vue';
const props = defineProps<{
    resourceType: ValidResources
}>()
// TODO - this should be refactored to have different logic, maybe a helper file function?
// right now my attempt to be generic feels like an anti-pattern
let buttonText: string;
let narrativeTrigger: keyof typeof narrativeTriggersToText;
let relevantSkill: ValidSkills;
switch (props.resourceType) {
    case 'ore':
        buttonText = 'Mine ore'
        narrativeTrigger = 'hasMined';
        relevantSkill = 'mining';
        break;
    default:
        console.error('invalid resource type for generate button')
}
const wasClickedTrigger = ref(false);
const wasClickedTriggerGold = ref(false);


const computedTextForPopUp = computed(() => {
    return `+${gameStateStorage.upgrades.pickaxe.level} Ore`
})
const computedTextForPopUpGold = computed(() => {
    return `+1 Gold`
})

const onClickHandler = () => {
    wasClickedTrigger.value = !wasClickedTrigger.value;
    let resourceModifier = 1
    activateNarrativeTrigger(narrativeTrigger)
    // gonna start by hard coding in gold chance - still unsure if I need to keep 
    // this as a generic component
    if (props.resourceType === 'ore') { // This seems wrong, bundle into function
        resourceModifier = gameStateStorage.upgrades.pickaxe.level;
        // Should probably have a probability helper for this. 
        const didMineGold = (Math.random() * 100) <= (gameStateStorage.skills.mining.level * 3);
        if (didMineGold) {
            gameStateStorage.resources.gold++;
            activateNarrativeTrigger('hasMinedGold')
            wasClickedTriggerGold.value = !wasClickedTriggerGold.value;
        }
    }
    earnExperienceInSkill(relevantSkill)

    gameStateStorage.resources[props.resourceType] += (1 * resourceModifier)
}

</script>

<template>
    <button @click="onClickHandler"> {{ buttonText }}
        <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger"/>
        <PopUpText :textForPopUp="computedTextForPopUpGold" :wasClickedTrigger="wasClickedTriggerGold" :color="'gold'" :shift="true"/>
    </button>

</template>

<style>
</style>