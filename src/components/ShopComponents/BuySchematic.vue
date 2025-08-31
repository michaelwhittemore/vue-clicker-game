<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { schematicsData } from '@/typescript/gameConstants/schematicsData';

const props = defineProps<{
    schematicName: keyof typeof schematicsData,
}>()
const { schematicName } = props;

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
const computedIsUnlocked: ComputedRef<boolean> = computed(schematicsData[schematicName].shouldDisplay);

</script>
<template>
    <button v-if="!gameStateStorage.unlockedSchematics.includes(schematicName) && computedIsUnlocked"
        @click="clickHandler(schematicName)">
        {{ schematicName }} ({{ schematicsData[schematicName].price }} gold)</button>

</template>