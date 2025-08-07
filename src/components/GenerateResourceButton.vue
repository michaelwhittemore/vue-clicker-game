<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
import type { ValidResources } from '@/typescript/gameTypes';
import { ref } from 'vue'
// This should probably have some props (like resource type) - look to automaton buy
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