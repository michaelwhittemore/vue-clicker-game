<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import type { NarrativeTrigger } from '@/typescript/gameTypes';
import type { ValidAutomatons, ValidResources } from '@/typescript/gameTypes';

const props = defineProps<{
    automatonType: ValidAutomatons,
}>()
let costResource: ValidResources;
let costQuantity: number;
let narrativeTrigger: NarrativeTrigger;
// The default computed value is true for both? Maybe that's unclear
let computedShouldDisplay: ComputedRef<boolean> = computed (() => true);
let computedHasLevelRequirement: ComputedRef<boolean> = computed(() => true);
let levelRequirementText: string; // This can be empty - maybe switch this to a computed
// if so, need to have level requirement in automatons data
switch (props.automatonType) {
    case 'autoMiner':
        costResource = 'steel';
        costQuantity = 10;
        narrativeTrigger = 'hasBuiltAutoMiner';
        break;
    case 'autoRefiner':
        costResource = 'steel';
        costQuantity = 20;
        narrativeTrigger = 'hasBuiltAutoRefiner'
        computedHasLevelRequirement = computed(() => gameStateStorage.skills.robotics.level >= 1);
        levelRequirementText = 'and Robotics Level 1'; // TODO - this can be programmatically generated
        break;
    case 'autoGoldMiner':
        // here!
        // TODO - maybe lock this behind a schematic?
        // Now that the schematic is ready we need to show it based on the schematic,
        // but also communicate the level requirement
        costResource = 'steel';
        costQuantity = 40;
        narrativeTrigger = 'hasBuiltAutoGoldMiner',
        computedHasLevelRequirement = computed(() => gameStateStorage.skills.robotics.level >= 3);
        computedShouldDisplay = computed(() => gameStateStorage.unlockedSchematics.includes('autoGoldMiner'));
        levelRequirementText = 'and Robotics Level 3'; // TODO - this can be programmatically generated
        break;
    default:
        console.error('Unknown automatonType')
        break;
}
const computedHasEnoughResources = computed(() => {
    return gameStateStorage.resources[costResource] < costQuantity
})
const onClickHandler = () => {
    activateNarrativeTrigger(narrativeTrigger);
    gameStateStorage.automatons[props.automatonType]++;
    if (props.automatonType === 'autoRefiner' && gameStateStorage.automatons.autoRefiner >= 2) {
        activateNarrativeTrigger('hasUnlockedShop');
    }
    gameStateStorage.resources[costResource] -= costQuantity;
    earnExperienceInSkill('robotics', 2)

}
// Maybe we should use dynamic component to display the level requirement??
</script>

<template>
    <button @click="onClickHandler" :disabled="computedHasEnoughResources" v-if="computedShouldDisplay">
        Build an {{ automatonType }} ({{ costQuantity }} {{ costResource }} {{ levelRequirementText }})</button>

</template>

<style>
/* button {
} */
</style>