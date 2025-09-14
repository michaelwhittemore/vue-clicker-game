<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { shipRepairsData } from '@/typescript/gameConstants/shipRepairsData';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
const props = defineProps<{
    repairType: keyof typeof shipRepairsData,
}>()
// these variables are all intended to be non-reactive
const {displayText, narrativeTrigger, steelCost, amountNeeded} = shipRepairsData[props.repairType];
const onClick = () => {
    activateNarrativeTrigger(narrativeTrigger)
}
// Will need to a cost based disabled
</script>
<template>
    <!-- the zero part is wrong -->
    <button @click="onClick">
        {{ displayText }} <br> {{ steelCost }} steel 
        ({{gameStateStorage.ship.requiredRepairs[repairType].amountBuilt}}/{{ amountNeeded }})
    </button>

</template>