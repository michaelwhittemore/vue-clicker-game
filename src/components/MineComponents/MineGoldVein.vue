<script setup lang="ts">
import { computed, ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import PopUpText from '../UtilityComponents/PopUpText.vue';
// We will need to wrap this in a v-if
// I think we get all the data on the vein from gameStateStorage
// HERE!
const wasClickedTriggerGold = ref(false);
const amountMined = ref(0);
const computedTextForPopUpGold = computed(() => {
  return `+${amountMined.value} Gold`; // TODO - this will scale with pickaxe
})
const onClickHandler = () => {
  // add mining xp
  earnExperienceInSkill('mining', 1)
  if (gameStateStorage.upgrades.pickaxe.level > gameStateStorage.goldVeinInfo.amountLeft) {
    amountMined.value = gameStateStorage.goldVeinInfo.amountLeft;
  } else {
    amountMined.value = gameStateStorage.upgrades.pickaxe.level;
  }
  wasClickedTriggerGold.value = !wasClickedTriggerGold.value;

  gameStateStorage.resources.gold += amountMined.value;
  gameStateStorage.goldVeinInfo.amountLeft -= amountMined.value;
  if (gameStateStorage.goldVeinInfo.amountLeft === 0) {
    activateNarrativeTrigger('minedOutGoldVein');
    gameStateStorage.goldVeinInfo.isActive = false;
  }
}
</script>
<template>
  <template v-if="gameStateStorage.goldVeinInfo.isActive">
    <button @click="onClickHandler">
      Mine gold vein ({{ gameStateStorage.goldVeinInfo.amountLeft }} remaining)
      <PopUpText :textForPopUp="computedTextForPopUpGold" :wasClickedTrigger="wasClickedTriggerGold" :color="'gold'" />
    </button>
  </template>

</template>
