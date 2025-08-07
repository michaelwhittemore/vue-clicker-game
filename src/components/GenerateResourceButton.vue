<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
import type { ValidResources } from '@/typescript/gameTypes';
const props = defineProps<{
    resourceType: ValidResources
}>()
let buttonText: string;
switch (props.resourceType) {
    case 'ore':
        buttonText = 'Mine ore'
        break;
    default:
        console.error('invalid resource type for generate button')
}
const onClickHandler = () => {
    stateStorage.resources.ore++
    stateStorage.skills.mining.experience++;
    stateStorage.skills.mining.level;
    // here! - do level up logic
    if (stateStorage.skills.mining.experience >= stateStorage.skills.mining.targetExperience){
        stateStorage.skills.mining.experience = 0;
        stateStorage.skills.mining.level++;
        // currently increasing by 15%
        stateStorage.skills.mining.targetExperience = Math.trunc(stateStorage.skills.mining.targetExperience * 1.15)
    }
    // Experience and level up may need it's own helper
    console.log('mining exp is',stateStorage.skills.mining.experience )
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