<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
const props = defineProps<{
    locationName: string,
    // colorScheme: string,
}>()
const computedShouldDisplay = computed(()=> {
    switch (props.locationName){
        case 'Mine': 
            return true
        case 'Refinery':
            return true
        case 'Robotics Fabricator':
            return true
        case 'Shop':
            return gameStateStorage.automatons.autoRefiner >= 2;
        default:
            console.error('unknown location')
            return false
    }
})
</script>

<template>
    <div class="locationWrapper" v-if="computedShouldDisplay">
        <div class="locationName">{{ props.locationName }}</div>
        <!-- The slotted component is passed in from app.vue -->
        <slot></slot>
    </div>
    
</template>

<style scoped>
.locationName{
    text-align: center;
}
.locationWrapper{
    height: 10em;
    width: 10em;
    padding: .2em;
    background-color: #a26769;
    border-style: dashed;
    margin: .5em;
}
</style>