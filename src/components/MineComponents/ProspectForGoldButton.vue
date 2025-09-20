<script setup lang="ts">
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
import { computed } from 'vue';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
// HERE!
// I should look to SearchForNewResource for some example
// should add popup text on success. (while we're at it, add that to the search as well)

// and we do amount as rng and as a function of prospectng level
// this will need to consume oil at some point, but not yet
// it needs to give xp

const onEvent = () => {
  earnExperienceInSkill('prospecting', 3)
  console.log('done!')
  // WIll need to calculate how much gold to add to the vein
  // will then need to update the game state
  //
}
const myString = "i'm the gold prospecting button, I don't require any oil at the moment"
const computedShouldDisable = computed(() => {
  return false
}); // has resources plus doesn't have active vein
const duration = 3;
</script>
<template>
<LoadingStateComponent :button-text="myString" :duration="duration" :should-disable="computedShouldDisable"
@finished-loading="onEvent"/>

</template>
