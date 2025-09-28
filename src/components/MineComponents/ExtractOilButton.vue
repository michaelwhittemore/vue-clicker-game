<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';

import PopUpText from '../UtilityComponents/PopUpText.vue';

const wasClickedTrigger = ref(false);
const onClickHandler = () => {
  console.log('oil')
  gameStateStorage.resources.oil += 1;
}
// HERE! need to address getResourceIncomeFactory, that's what is causing a bug

// WIll also need to add oil to unlocked in game state storage. - This may cause problems in SearchForNewResource.vue
// Maybe it makes more sense to replace `unlockedResources` with `lockedResources`
// In search for new resources we will need to iterate over the lockedResources array
</script>
<template>
  <button v-if="gameStateStorage.unlockedResources.includes('oil')" @click="onClickHandler">
    I'm the extract oil button
  </button>

</template>
