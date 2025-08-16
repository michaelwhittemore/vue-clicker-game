<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import type { ValidResources, ValidSkills, NarrativeTrigger } from '@/typescript/gameTypes';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
const props = defineProps<{
    resourceType: ValidResources
}>()
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
    activateNarrativeTrigger(narrativeTrigger)
    gameStateStorage.resources[props.resourceType]++
    // gonna start by hard coding in gold chance - still unsure if I need to keep 
    // this as a generic component
    if (props.resourceType === 'ore'){ // This seems wrong, bundle into function
        // Should probably have a probability helper for this. 
        const didMineGold = (Math.random() * 100) <= (gameStateStorage.skills.mining.level * 5);
        if (didMineGold){
            gameStateStorage.resources.gold++;
            activateNarrativeTrigger('hasMinedGold')
        }
    }
    earnExperienceInSkill(relevantSkill)

}
</script>

<template>
    <button @click="onClickHandler"> {{ buttonText }} </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>