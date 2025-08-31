<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { schematicsData } from '@/typescript/gameConstants/schematicsData';

const props = defineProps<{
    schematicName: keyof typeof schematicsData,
}>()

/* Possible schematics include:
    - Auto gold miner AutoGoldMiner
    - upgraded refiner (The button will be in the refinery)
    - Nero-uplink - the button the adjust it should be above the experience bar area I think
    - Advanced Auto Miner
    - Prospecting tool (unlocks new resources in the mines)
*/
const clickHandler = (schematicName: keyof typeof schematicsData) => {
    gameStateStorage.unlockedSchematics.push(schematicName);
    gameStateStorage.resources.gold -= schematicsData[schematicName].price;
}
// Maybe I can have a method which then gets passed into computed? I think that would work?
let computedShouldDisplay;
let computedIsUnlocked: ComputedRef<boolean>;;

switch (props.schematicName) {
    case 'advancedAutoMiner':
        computedIsUnlocked = computed(() => true);
        break;
    case 'autoGoldMiner':
        computedIsUnlocked = computed(() => true);
        break;
    default:
        console.error('Unknown Schematic')
        computedIsUnlocked = computed(() => false);
        break;
}


</script>
<template>
    <button v-if="!gameStateStorage.unlockedSchematics.includes(schematicName) && computedIsUnlocked"
        @click="clickHandler(schematicName)">
        {{ schematicName }} ({{ schematicsData[schematicName].price }} gold)</button>

</template>