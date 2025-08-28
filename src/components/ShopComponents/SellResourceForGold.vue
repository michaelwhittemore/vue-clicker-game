<script setup lang="ts">
import { computed, ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill } from '@/typescript/gameHelpers';
import { tradingLevelsToResourceMap } from '@/typescript/gameConstants/resourceExchangeRateGetters';
import PopUpText from '../PopUpText.vue';

// We don't use ValidResourceType as we don't need this for gold
const props = defineProps<{
    resourceType: 'steel' | 'ore',
}>()
// Destructuring from props should be ok as the resource will never change and we're not concerned 
// with reactivity
const { resourceType } = props;

const computedExchangeRate = computed(() => {
    return tradingLevelsToResourceMap[resourceType](gameStateStorage.skills.trading.level)
})

const wasClickedTrigger = ref(false); // Used to trigger popUpText

const onClickSell = () => {
    wasClickedTrigger.value = !wasClickedTrigger.value;
    gameStateStorage.resources[resourceType] -= computedExchangeRate.value
    gameStateStorage.resources.gold++;

    earnExperienceInSkill('trading', 1);
}
const computedTextForPopUp = computed(() => {
    return `+1 Gold`
})
const computedEnoughToEnable = computed(() => gameStateStorage.resources[resourceType] >= computedExchangeRate.value)
</script>
<template>
    <button @click="onClickSell" :disabled="!computedEnoughToEnable">
        Sell {{ computedExchangeRate }} {{ resourceType }} for one gold
        <PopUpText :textForPopUp="computedTextForPopUp" :wasClickedTrigger="wasClickedTrigger" :color="'gold'"/>
    </button>
</template>