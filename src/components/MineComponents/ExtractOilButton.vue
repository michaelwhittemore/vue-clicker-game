<script setup lang="ts">
import { ref, computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';

import PopUpText from '../UtilityComponents/PopUpText.vue';

const computedTextForPopUp = computed(() => {
  return '+1 Oil';
})
const wasClickedTrigger = ref(false);
const onClickHandler = () => {
  gameStateStorage.resources.oil += 1 * 1; // we don't have any modifiers yet
  earnExperienceInSkill('mining', 1);
  activateNarrativeTrigger('hasExtractedOil');
  wasClickedTrigger.value = !wasClickedTrigger.value;
}

</script>
<template>
  <button v-if="gameStateStorage.unlockedResources.includes('oil')" @click="onClickHandler">
     <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger" :color="'black'"/>
    Extract Oil
  </button>

</template>
