<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import type { ValidResources, NarrativeTrigger } from '@/typescript/gameTypes';
const props = defineProps<{
    resourceType: ValidResources
}>()
let buttonText: string;
let narrativeTrigger: NarrativeTrigger;
switch (props.resourceType) {
    case 'ore':
        buttonText = 'Mine ore'
        narrativeTrigger = 'hasMined';
        break;
    default:
        console.error('invalid resource type for generate button')
}
const onClickHandler = () => {
    if (!gameStateStorage.narrativeTriggersArray.includes(narrativeTrigger)) {
        gameStateStorage.narrativeTriggersArray.push(narrativeTrigger)
    }
    gameStateStorage.resources.ore++
    // ---- This is all exp and level up logic ------
    gameStateStorage.skills.mining.experience++;
    gameStateStorage.skills.mining.level;
    if (gameStateStorage.skills.mining.experience >= gameStateStorage.skills.mining.targetExperience) {
        gameStateStorage.skills.mining.experience = 0;
        gameStateStorage.skills.mining.level++;
        if (!gameStateStorage.narrativeTriggersArray.includes('hasLeveledMining')) {
            gameStateStorage.narrativeTriggersArray.push('hasLeveledMining')
        }
        // currently increasing by 15%
        gameStateStorage.skills.mining.targetExperience = Math.trunc(gameStateStorage.skills.mining.targetExperience * 1.15)
    }
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