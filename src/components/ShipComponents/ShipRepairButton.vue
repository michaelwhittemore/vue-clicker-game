<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { shipRepairsData, type RepairInformation} from '@/typescript/gameConstants/shipRepairsData';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
const props = defineProps<{
    repairType: keyof typeof shipRepairsData,
}>()
// these variables are all intended to be non-reactive
const { displayText, narrativeTrigger, steelCost, amountNeeded } = shipRepairsData[props.repairType];
const onClick = () => {
    activateNarrativeTrigger(narrativeTrigger);
    // Need to check if amount is correct, if so remove the property
}

const computedAmountBuilt = computed(() => {
    return (gameStateStorage.ship.requiredRepairs as Record<string, RepairInformation>)[props.repairType].amountBuilt
})

// Will need to a cost based disabled
</script>
<template>
    <button @click="onClick" :disabled="steelCost > gameStateStorage.resources.steel">
        {{ displayText }} <br> {{ steelCost }} steel
        ({{computedAmountBuilt}}/{{ amountNeeded }})

    </button>

</template>