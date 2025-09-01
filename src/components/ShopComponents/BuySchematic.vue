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
const computedIsUnlocked: ComputedRef<boolean> = computed(schematicsData[schematicName].shouldDisplay);

</script>
<template>
    <button v-if="!gameStateStorage.unlockedSchematics.includes(schematicName) && computedIsUnlocked"
        @click="clickHandler(schematicName)">
        {{ readableTextMap[schematicName] }} ({{ schematicsData[schematicName].price }} gold)</button>

</template>