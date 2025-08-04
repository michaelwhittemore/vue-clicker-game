<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
const onClickHandler = () => {
   stateStorage.count++
}
</script>

<template>
    <button @click="onClickHandler"> I'm a button, the current state is {{ stateStorage.count }}</button>
</template>

<style scoped>
button {
    background-color: red
}
</style>