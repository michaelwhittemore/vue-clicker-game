<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
// Will need a narrative for both before and after. 
// Will need to be disabled when it's loading and based on level
// HERE!
// will need to take advantage of parent evening
// will want to pass in should be enabled and handle the resoltuion in this component
// The text will need to be dynamic
const buttonText = 'Search for new resources (requires mining 5)'
const duration = ref(10); // duration may change? 
</script>

<template> 
    <LoadingStateComponent :duration="10" :button-text="buttonText"/> 
</template>