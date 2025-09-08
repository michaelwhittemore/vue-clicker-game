<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { readableTextMap } from '@/typescript/gameConstants/readableTextMap';
import { computed } from 'vue';
const props = defineProps<{
    upgradeName: 'improvedRefineryHopper' | 'improvedRefineryFurnace',
}>()
const { upgradeName } = props

let onClickHandler: () => void;
let upgradeCost: number;
// this should eventually be a map if there's a lot of methods
// Also should we consider being able to upgrade each more than once??
switch (upgradeName) {
    case 'improvedRefineryHopper':
        upgradeCost = 100;
        onClickHandler = () => {
            gameStateStorage.refineryState.oreInput = 8;
            gameStateStorage.refineryState.refineryUpgrades.push('improvedRefineryHopper')
            gameStateStorage.resources.steel -= upgradeCost;
        }
        break;
    case 'improvedRefineryFurnace':
        upgradeCost = 150;
        onClickHandler = () => {
            gameStateStorage.refineryState.steelOutput = 2;
            gameStateStorage.refineryState.refineryUpgrades.push('improvedRefineryFurnace')
            gameStateStorage.resources.steel -= upgradeCost;
        }
        break;
    default:
        console.error('invalid refinery upgrade')
        break;
}
const computedShouldDisplay = computed(() => {
    // Only show if the schematic has been purchase and we haven't already built it
    return gameStateStorage.unlockedSchematics.includes(upgradeName) &&
        !gameStateStorage.refineryState.refineryUpgrades.includes(upgradeName)
})

const computedSufficientSteel = computed(() => {
    return gameStateStorage.resources.steel >= upgradeCost;
})
</script>
<template>
    <template v-if="computedShouldDisplay">
        <button :disabled="!computedSufficientSteel" @click="onClickHandler"> 
            {{ readableTextMap[upgradeName] }} ({{ upgradeCost }} steel)</button>
    </template>
</template>
