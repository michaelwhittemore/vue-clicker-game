<script setup lang="ts">
import { ref, computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import PopUpText from '../UtilityComponents/PopUpText.vue';

const wasClickedTrigger = ref(false);
const wasClickedTriggerGold = ref(false);

const computedTextForPopUp = computed(() => {
  return `+${gameStateStorage.upgrades.pickaxe.level} Ore`
})
const computedTextForPopUpGold = computed(() => {
  return `+1 Gold` // This may change in the future? perhaps with a high enough prospecting level
})

const onClickHandler = () => {
  wasClickedTrigger.value = !wasClickedTrigger.value;
  activateNarrativeTrigger('hasMined')

  const basePercentChanceForGold = 3
  const didMineGold = (Math.random() * 100) <= (gameStateStorage.skills.mining.level * basePercentChanceForGold);
  if (didMineGold) {
    gameStateStorage.resources.gold++;
    activateNarrativeTrigger('hasMinedGold')
    wasClickedTriggerGold.value = !wasClickedTriggerGold.value;
  }

  earnExperienceInSkill('mining', 1)
  gameStateStorage.resources.ore += (1 * gameStateStorage.upgrades.pickaxe.level)
}
</script>

<template>
  <button @click="onClickHandler"> Mine Ore
    <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger" />
    <PopUpText :textForPopUp="computedTextForPopUpGold" :wasClickedTrigger="wasClickedTriggerGold" :color="'gold'"
      :shift="true" />
  </button>

</template>
