<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { readableTextMap } from '@/typescript/gameConstants/readableTextMap';
// What determines if we show it? 
const props = defineProps<{
    upgradeName: 'improvedRefineryHopper' | 'improvedRefineryFurnace',
}>()
const { upgradeName } = props

let onClickHandler: () => void;
let upgradeCost: number;
// this should eventually be a map if there's a lot of methods
switch (upgradeName) {
    case 'improvedRefineryHopper':
        upgradeCost = 100;
        onClickHandler = () => {
            gameStateStorage.refineryState.oreInput = 9;
            gameStateStorage.refineryState.refineryUpgrades.push('improvedRefineryHopper')
            gameStateStorage.resources.steel-= upgradeCost;
        }
        break;
    case 'improvedRefineryFurnace':
        upgradeCost = 150;
        onClickHandler = () => {
            gameStateStorage.refineryState.steelOutput = 2;
            gameStateStorage.refineryState.refineryUpgrades.push('improvedRefineryFurnace')
            gameStateStorage.resources.steel-= upgradeCost;
        }
        break;
    default:
        console.error('invalid refinery upgrade')
        break;
}
</script>
<template>
    <button @click="onClickHandler"> {{ readableTextMap[upgradeName] }} ({{ upgradeCost }} steel)</button>
</template>
