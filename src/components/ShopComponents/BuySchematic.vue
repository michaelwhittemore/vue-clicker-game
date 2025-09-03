<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { schematicsData } from '@/typescript/gameConstants/schematicsData';
import { readableTextMap } from '@/typescript/gameConstants/readableTextMap';

const props = defineProps<{
    schematicName: keyof typeof schematicsData,
}>()
const { schematicName } = props;

const clickHandler = (schematicName: keyof typeof schematicsData) => {
    gameStateStorage.unlockedSchematics.push(schematicName);
    gameStateStorage.resources.gold -= schematicsData[schematicName].price;
}
// `shouldDisplay` is itself a function
const computedIsUnlocked: ComputedRef<boolean> = computed(schematicsData[schematicName].shouldDisplay);
const computedSufficientGold = computed(() => {
    return gameStateStorage.resources.gold >= schematicsData[schematicName].price;
})

</script>
<template>
    <button v-if="!gameStateStorage.unlockedSchematics.includes(schematicName) && computedIsUnlocked"
        @click="clickHandler(schematicName)" :disabled="!computedSufficientGold">
        {{ readableTextMap[schematicName] }} ({{ schematicsData[schematicName].price }} gold)</button>

</template>