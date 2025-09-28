<script setup lang="ts">
import { ref, computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { activateNarrativeTrigger, earnExperienceInSkill } from '@/typescript/gameHelpers';
import { newResourcesData } from '@/typescript/gameConstants/newResourcesData';
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
import PopUpText from '../UtilityComponents/PopUpText.vue';

const textForPopUp = ref('')
const existSearchableResources = computed(() => {

})
const displayFailurePopup = ref(false);
let indexOfSearchResource = ref(0); // TODO, maybe tie this to game state? I'm trying
// to avoid component based state saving for various reasons

// Required time is in seconds
const computedRequiredTime = computed(() => newResourcesData[indexOfSearchResource.value].searchDuration);
const computedRequiredLevel = computed(() => newResourcesData[indexOfSearchResource.value].requiredLevel);

const computedSuccessChance = computed(() => {
  // Odds = base + (prospecting * 2) + (mining * 1)
  return Math.min(newResourcesData[indexOfSearchResource.value].baseSuccessChance
    + (gameStateStorage.skills.prospecting.level * 2) + (gameStateStorage.skills.mining.level * 1), 100)
})
const computedHasSufficientLevel = computed(() => {
  return gameStateStorage.skills.mining.level >= computedRequiredLevel.value;
})

const computedText = computed(() => {
  return `Search for new resources (mining ${computedRequiredLevel.value},
   takes ${computedRequiredTime.value} seconds, ${computedSuccessChance.value}% to succeed)`
})

const onEvent = () => {
  // Gain xp regardless of the success or failure
  earnExperienceInSkill('prospecting', newResourcesData[indexOfSearchResource.value].experienceValue)

  const didSucceed = (Math.random() * 100) <= computedSuccessChance.value;
  if (didSucceed) {
    const foundResourceName = newResourcesData[indexOfSearchResource.value].name
    textForPopUp.value = `Found ${foundResourceName}!`
    displayFailurePopup.value = !displayFailurePopup.value

    gameStateStorage.unlockedResources.push(foundResourceName)
    activateNarrativeTrigger(newResourcesData[indexOfSearchResource.value].narrativeTriggerOnSuccess);
    // HERE! bugged behavior, the value can go above the longest possible
    if (indexOfSearchResource.value < newResourcesData.length - 1){
      // TODO - update the search to make it clear you can't find anything else
      // maybve have a v-if tied to the `existSearchableResources` ref
      // I think instead of preventing the increment we need to change the text to make
      // it clear that there's no more resoruces
      indexOfSearchResource.value++;
    } else {
      console.warn('no more searchable resources')
      existSearchableResources.false
      // TODO here
    }

  } else {
    textForPopUp.value = 'Nothing found!'
    displayFailurePopup.value = !displayFailurePopup.value

    activateNarrativeTrigger('nothingFoundWhenProspecting')
  }
}

</script>

<template>
  <LoadingStateComponent @finished-loading="onEvent" :duration="computedRequiredTime" :button-text="computedText"
    :should-disable="!computedHasSufficientLevel">
    <PopUpText PopUpText :textForPopUp="textForPopUp" :wasClickedTrigger="displayFailurePopup" :color="'red'" />
  </LoadingStateComponent>
</template>
