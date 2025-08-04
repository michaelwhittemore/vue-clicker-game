<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
const onClickHandler = () => {
   stateStorage.currency++
}
</script>

<template>
    <p>Make some money!</p>
    <button @click="onClickHandler">  💵 </button>
</template>

<style>
button {
    /* background-color: red */
}
</style>