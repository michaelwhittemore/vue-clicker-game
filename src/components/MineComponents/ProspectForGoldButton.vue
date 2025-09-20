<script setup lang="ts">
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
import { computed } from 'vue';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import { gameStateStorage } from '@/typescript/gameStateStorage';
// HERE!
// I should look to SearchForNewResource for some example
// should add popup text on success. (while we're at it, add that to the search as well)

// and we do amount as rng and as a function of prospectng level
// this will need to consume oil at some point, but not yet
// it needs to give xp

const onEvent = () => {
  earnExperienceInSkill('prospecting', 3)
  // veinAmount = (prospecting + 1) * 5 * random multiplier between 50% - 100% rounded up
  const veinAmount = Math.ceil((gameStateStorage.skills.prospecting.level + 1) * 5 * (Math.random() + 0.5))
  console.log('veinAmount!', veinAmount)
  gameStateStorage.goldVeinInfo.isActive = true
  gameStateStorage.goldVeinInfo.amountLeft = veinAmount;
  // Will also need to add narrative text and popup
}
const myString = "i'm the gold prospecting button, I don't require any oil at the moment"
const computedShouldDisable = computed(() => {
  return false
}); // has resources plus doesn't have active vein
const duration = 1;
</script>
<template>
  <LoadingStateComponent :button-text="myString" :duration="duration" :should-disable="computedShouldDisable"
    @finished-loading="onEvent" />

</template>
