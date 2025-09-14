<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { shipRepairsData, type RepairInformation } from '@/typescript/gameConstants/shipRepairsData';
import { activateNarrativeTrigger } from '@/typescript/gameHelpers';
const props = defineProps<{
    repairType: keyof typeof shipRepairsData,
}>()
// these variables are all intended to be non-reactive
const { repairType } = props
const { displayText, narrativeTrigger, steelCost, amountNeeded } = shipRepairsData[repairType];

const onClick = () => {
    gameStateStorage.resources.steel -= steelCost;
    // Used to keep from having to do this ugly assertion every time
    const requiredRepairsReference = (gameStateStorage.ship.requiredRepairs as Record<string, RepairInformation>)[repairType]
    requiredRepairsReference.amountBuilt += 1;
    if (requiredRepairsReference.amountBuilt >= amountNeeded) {
        activateNarrativeTrigger(narrativeTrigger);
        gameStateStorage.ship.completedRepairs.push(repairType);
        if (gameStateStorage.ship.isFixed){
            activateNarrativeTrigger('hasFullyRepairedShip')
        }
    }
}
const computedAmountBuilt = computed(() => {
    return (gameStateStorage.ship.requiredRepairs as Record<string, RepairInformation>)[repairType].amountBuilt
})

</script>
<template>
    <template v-if="!gameStateStorage.ship.completedRepairs.includes(repairType)" >
        <button @click="onClick" :disabled="steelCost > gameStateStorage.resources.steel">
            {{ displayText }} <br> {{ steelCost }} steel
            ({{ computedAmountBuilt }}/{{ amountNeeded }})

        </button>
    </template>
</template>