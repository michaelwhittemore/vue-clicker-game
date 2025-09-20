<script setup lang="ts">
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
// HERE!
// I should look to SearchForNewResource for some example
// Hmm is it time dependant or amount depedant?
// I'm thinking amount?
// and we do amount as rng and as a function of prospectng level
// this will need to consume oil at some point, but not yet
// it needs to give xp
// We will use loadingStateComponent again
// need to have the button appear in the miningTab
// Will need to track gold vein in the gameStateStorage
// Maybe we should start with the mineVeinButton?
const onEvent = () => {
  console.log('done!')
  //
}
const myString = "i'm the gold prospecting button, I don't require any oil at the moment"
const shouldDisable = false; // has resources plus doesn't have active vein
const duration = 3;
</script>
<template>
<LoadingStateComponent :button-text="myString" :duration="duration" :should-disable="shouldDisable"
@finished-loading="onEvent"/>

</template>
