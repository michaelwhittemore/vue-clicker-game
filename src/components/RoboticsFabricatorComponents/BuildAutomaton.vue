<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import { automatonsData } from '@/typescript/gameConstants/automatonsData';
import type { NarrativeTrigger } from '@/typescript/gameTypes';
import type { ValidResources } from '@/typescript/gameTypes';
const props = defineProps<{
    automatonType: keyof typeof automatonsData,
}>()
const {automatonType} = props; // can safely destructure as this is const

let costResource: ValidResources;
let costQuantity: number;
let narrativeTrigger: NarrativeTrigger;

let computedShouldDisplay: ComputedRef<boolean> = computed (() => {
    if (!automatonsData[automatonType].requiresSchematic){
        return true 
    } else {
        return gameStateStorage.unlockedSchematics.includes(automatonType)
    }
});
let computedHasLevelRequirement: ComputedRef<boolean> = computed(() => {
    if (!automatonsData[automatonType].levelRequirement){
        return true 
    } else {
        return gameStateStorage.skills.robotics.level >= automatonsData[automatonType].levelRequirement;
    }
});
let levelRequirementText: string; // This can be empty - maybe switch this to a computed
// if so, need to have level requirement in automatons data
switch (automatonType) {
    case 'autoMiner':
        costResource = 'steel';
        costQuantity = 10;
        narrativeTrigger = 'hasBuiltAutoMiner';
        break;
    case 'autoRefiner':
        costResource = 'steel';
        costQuantity = 20;
        narrativeTrigger = 'hasBuiltAutoRefiner'
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
    return gameStateStorage.resources[costResource] >= costQuantity
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
    <button @click="onClickHandler" :disabled="!(computedHasEnoughResources && computedHasLevelRequirement)" v-if="computedShouldDisplay">
        Build an {{ automatonType }} ({{ costQuantity }} {{ costResource }} {{ levelRequirementText }})</button>

</template>

<style>
/* button {
} */
</style>