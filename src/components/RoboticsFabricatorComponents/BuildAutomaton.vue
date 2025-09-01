<script setup lang="ts">
import { computed } from 'vue';
import type { ComputedRef } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { earnExperienceInSkill, activateNarrativeTrigger } from '@/typescript/gameHelpers';
import { automatonsData } from '@/typescript/gameConstants/automatonsData';
import { narrativeTriggersToText } from '@/typescript/gameConstants/narrativeTriggersToText';
import { readableTextMap } from '@/typescript/gameConstants/readableTextMap';
import type { ValidResources } from '@/typescript/gameTypes';
const props = defineProps<{
    automatonType: keyof typeof automatonsData,
}>()
const { automatonType } = props; // can safely destructure as this is never changes

let costResource: ValidResources = automatonsData[automatonType].costResource;
let costQuantity: number = automatonsData[automatonType].price;
let narrativeTrigger: keyof typeof narrativeTriggersToText = automatonsData[automatonType].narrativeTrigger;

let computedShouldDisplay: ComputedRef<boolean> = computed(() => {
    if (!automatonsData[automatonType].requiresSchematic) {
        return true
    } else {
        return gameStateStorage.unlockedSchematics.includes(automatonType)
    }
});
const computedHasLevelRequirement: ComputedRef<boolean> = computed(() => {
    if (!automatonsData[automatonType].levelRequirement) {
        return true
    } else {
        return gameStateStorage.skills.robotics.level >= automatonsData[automatonType].levelRequirement;
    }
});
const levelRequirementText: ComputedRef<string> = computed(() => {
    if (!automatonsData[automatonType].levelRequirement) {
        return ''
    } else {
        return `and Robotics level ${automatonsData[automatonType].levelRequirement}`
    }
});

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
    earnExperienceInSkill('robotics', automatonsData[automatonType].earnedExperience)

}
</script>

<template>
    <button @click="onClickHandler" :disabled="!(computedHasEnoughResources && computedHasLevelRequirement)"
        v-if="computedShouldDisplay">
        Build an {{ readableTextMap[automatonType] }} ({{ costQuantity }} {{ costResource }} {{ levelRequirementText }})</button>
</template>