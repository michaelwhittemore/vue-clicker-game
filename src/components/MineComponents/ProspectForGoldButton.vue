<script setup lang="ts">
import LoadingStateComponent from '../UtilityComponents/LoadingStateComponent.vue';
import { computed, ref } from 'vue';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import PopUpText from '../UtilityComponents/PopUpText.vue';

const veinAmount = ref(0)
const displayPopup = ref(false);
const onEvent = () => {
  earnExperienceInSkill('prospecting', 3)
  // veinAmount = (prospecting + 2) * 5 * random multiplier between 50% - 100% rounded up
  veinAmount.value = Math.ceil((gameStateStorage.skills.prospecting.level + 2) * 5 * (Math.random() + 0.5))
  gameStateStorage.goldVeinInfo.isActive = true
  gameStateStorage.goldVeinInfo.amountLeft = veinAmount.value;
  activateNarrativeTrigger('discoveredGoldVein')

  displayPopup.value = !displayPopup.value
}
const myString = "i'm the gold prospecting button, I don't require any oil at the moment"
const computedShouldDisable = computed(() => {
  // There may be a resource cost in the future?
  return gameStateStorage.goldVeinInfo.isActive;
});
const duration = 1;
</script>
<template>
  <LoadingStateComponent :button-text="myString" :duration="duration" :should-disable="computedShouldDisable"
    @finished-loading="onEvent" >
    <PopUpText PopUpText :textForPopUp="veinAmount + ' gold vein'" :wasClickedTrigger="displayPopup" :color="'gold'" />
  </LoadingStateComponent>
</template>
