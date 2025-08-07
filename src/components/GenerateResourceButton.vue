<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
// This should probably have some props (like resource type)
const onClickHandler = () => {
   stateStorage.resources.ore++
   
}
</script>

<template>
    <button @click="onClickHandler"> Mine ore </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>