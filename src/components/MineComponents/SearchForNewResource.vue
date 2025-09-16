<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
// Will need a narrative for both before and after. 
// Will need to be disabled when it's loading and based on level
// HERE!
// will need to take advantage of parent evening
// will want to pass in should be enabled and handle the resoltuion in this component
// The text will need to be dynamic
const buttonText = 'search for new resource (requires mining 5)'
</script>

<template> 
    <LoadingStateComponent :duration="1000" :button-text="buttonText"/> 
</template>