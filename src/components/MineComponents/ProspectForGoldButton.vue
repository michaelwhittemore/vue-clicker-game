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
const myString = "i'm the gold prospecting button, I don't require any oil at the moment"
</script>
<template>
<LoadingStateComponent :button-text="myString" :duration="10" :should-disable="false"/>

</template>
