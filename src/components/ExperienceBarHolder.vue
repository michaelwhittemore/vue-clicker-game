<script setup lang="ts">
import { computed, ref } from 'vue';
import ExperienceBar from './ExperienceBar.vue';
import type { ValidSkills } from '@/typescript/gameTypes';
import { stateStorage } from '@/typescript/stateStorage';

// What triggers each skill? Maybe when it has a non zero value? Either xp or level > 0
const computedActiveSkills = computed(() => {
    return (Object.keys(stateStorage.skills) as Array<keyof typeof stateStorage.skills>).filter(
        skillName => {
            return stateStorage.skills[skillName].level > 0 || stateStorage.skills[skillName].experience > 0
        })
})

</script>

<template>
    <ExperienceBar v-for="skillName in computedActiveSkills" :skill-name="skillName" />
</template>