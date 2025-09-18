<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger, earnExperienceInSkill } from '@/typescript/gameHelpers';
import { newResourcesData } from '@/typescript/gameConstants/newResourcesData';
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';

// What happens if there are no mores resources left? Need to destroy the button if indexOfSearchResource
// is greater than the length

let indexOfSearchResource = 0;
// Required time is in seconds
const computedRequiredTime = computed(() => newResourcesData[indexOfSearchResource].searchDuration);
const computedRequiredLevel = computed(() => newResourcesData[indexOfSearchResource].requiredLevel);
// computedSuccessChance should also involve mining and prospecting level
const computedSuccessChance = computed(() => newResourcesData[indexOfSearchResource].baseSuccessChance)
const computedHasSufficientLevel = computed(() => {
  return gameStateStorage.skills.mining.level >= computedRequiredLevel.value;
})
// TODO - Need to add the chance for success to the text
const computedText = computed(() => {
  return `Search for new resources (mining ${computedRequiredLevel.value}, takes ${computedRequiredTime.value} seconds)`
})

const onEvent = () => {
  // Gain xp regardless of the success or failure
  earnExperienceInSkill('prospecting', newResourcesData[indexOfSearchResource].experienceValue)
  // need to check for success, if so increment indexOfSearchResource (else pop up found nothing)
  // maybe both mining and prospecting count towards this?
  const didSucceed = true; // should look for the same helper as gold mining
  if (didSucceed){
    gameStateStorage.resources[newResourcesData[indexOfSearchResource].name] = 0;
    activateNarrativeTrigger(newResourcesData[indexOfSearchResource].narrativeTriggerOnSuccess);
    indexOfSearchResource++;
  } else {
    // TODO - popup a nothing icon
    console.warn('You found nothing. Better luck next time ')
  }
  // need to add the narrative triggers
  // Will probably have a new mining button in the miningTab
  // Will have a v-if dependant on if it exists on gameStateStorage
  // If it succeeds, we will need to update requiredTime and requiredLevel
}

</script>

<template>
  <LoadingStateComponent @finished-loading="onEvent" :duration="computedRequiredTime" :button-text="computedText"
    :should-disable="!computedHasSufficientLevel" />
</template>
