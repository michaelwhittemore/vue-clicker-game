<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import type { ValidResources, ValidSkills, NarrativeTrigger } from '@/typescript/gameTypes';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import PopUpText from './PopUpText.vue';
const props = defineProps<{
    resourceType: ValidResources
}>()
// TODO - this should be factored to have different logic, maybe a helper file function?
// right now my attempt to be generic feels like an anti-pattern
let buttonText: string;
let narrativeTrigger: NarrativeTrigger;
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
// HERE! - should really move this to a helper, also this will need to scale with pickaxe level
const onClickHandler = () => {
    let resourceModifier = 1
    activateNarrativeTrigger(narrativeTrigger)
    // gonna start by hard coding in gold chance - still unsure if I need to keep 
    // this as a generic component
    if (props.resourceType === 'ore'){ // This seems wrong, bundle into function
        resourceModifier = gameStateStorage.upgrades.pickaxe.level;
        // Should probably have a probability helper for this. 
        const didMineGold = (Math.random() * 100) <= (gameStateStorage.skills.mining.level * 5);
        if (didMineGold){
            gameStateStorage.resources.gold++;
            activateNarrativeTrigger('hasMinedGold')
        }
    }
    earnExperienceInSkill(relevantSkill)
    // might need to break this into a value for the UI that I want to make (
    // the little popup, like +1 ore)
    gameStateStorage.resources[props.resourceType]+= (1 * resourceModifier)


}
</script>

<template>
    <button @click="onClickHandler"> {{ buttonText }} 
        <PopUpText />
    </button>

</template>

<style>
button {
    /* background-color: red */
}
</style>