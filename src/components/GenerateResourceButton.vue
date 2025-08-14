<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import type { ValidResources, ValidSkills, NarrativeTrigger } from '@/typescript/gameTypes';
import { earnExperienceInSkill } from '@/typescript/gameHelpers';
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
const onClickHandler = () => {
    if (!gameStateStorage.narrativeTriggersArray.includes(narrativeTrigger)) {
        gameStateStorage.narrativeTriggersArray.push(narrativeTrigger)
    }
    gameStateStorage.resources[props.resourceType]++
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