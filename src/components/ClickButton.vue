<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
const onClickHandler = () => {
   console.log('asdsadsad') 
   stateStorage.count++
}
</script>

<template>
    <button @click="onClickHandler"> I'm a button, the current state is {{ stateStorage.count }}</button>
</template>

<style>
button {
    background-color: red
}
</style>