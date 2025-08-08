<script setup lang="ts">
import { computed, ref } from 'vue';
import ExperienceBar from './ExperienceBar.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

// We only want to display skills that have non zero value for either xp or level
const computedActiveSkills = computed(() => {
    return (Object.keys(gameStateStorage.skills) as Array<keyof typeof gameStateStorage.skills>).filter(
        skillName => {
            return gameStateStorage.skills[skillName].level > 0 || gameStateStorage.skills[skillName].experience > 0
        })
})

</script>

<template>
    <ExperienceBar v-for="skillName in computedActiveSkills" :skill-name="skillName" />
</template>