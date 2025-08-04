<script setup lang="ts">
import { ref } from 'vue';
import { stateStorage } from '@/typescript/stateStorage';
import GenericResourceDisplay from './GenericResourceDisplay.vue';
// Might make sense to have reusable display for each kind 
// Also do something when they're zero? Maybe change color based on scale?
const testArrRef = ref([1, 2, 3, 4])
const testArrRef2 = ref([{
        resourceName: 'a',
        resourceAmount: 1
    },
    {
        resourceName: 'b',
        resourceAmount: 1
    },
])
const resourceName = ref('Dollar')
const resourceAmount = ref(12)
</script>

<template>
    <p> I'm the resource display, this will need to be dynamically generated</p>
    <div class="resourceDisplay">
    </div>
    <!-- <div v-for="item in testArrRef"> This should be a generic item {{ item }}</div> -->
    <GenericResourceDisplay v-for="item in testArrRef2" :resource-name="item.resourceName" :resource-amount="item.resourceAmount" />

    <GenericResourceDisplay :resource-name="resourceName" :resource-amount="resourceAmount" />
</template>

<style></style>