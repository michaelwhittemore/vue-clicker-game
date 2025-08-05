<script setup lang="ts">
import { ref } from 'vue';
import { stateStorage } from '@/typescript/stateStorage';
import GenericResourceDisplay from './GenericResourceDisplay.vue';
// Might make sense to have reusable display for each kind 
// Also do something when they're zero? Maybe change color based on scale?
</script>

<template>
    <div id="resourceDisplay">
        <!-- // might need to add a key, see the dos?? -->
        <GenericResourceDisplay v-for="(value, key) in stateStorage.resources" :resource-name="key" :resource-amount="value" />
    </div>
</template>

<style scoped>
/* if I use this a lot it may be worth making global utility class*/
#resourceDisplay{
    display: flex;
}
</style>