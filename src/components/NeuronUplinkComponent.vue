<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

// Will need to check all skills that have > 0 exp or level (maybe a helper? I use that somewhere 
// else too)
// Will need to inform you of the currently selected skill and the rate you're gaining XP
//         Look at https://vuejs.org/guide/essentials/forms!
const computedActiveSkills = computed(() => {
    return (Object.keys(gameStateStorage.skills) as Array<keyof typeof gameStateStorage.skills>).filter(
        skillName => {
            return gameStateStorage.skills[skillName].level > 0 || gameStateStorage.skills[skillName].experience > 0
        })
})
const selectedSkill = ref(null)
watch(selectedSkill, (skill) => {
    gameStateStorage.neuronUplink.selectedSkill = skill;
})
</script>
<template>
    <template v-if="gameStateStorage.neuronUplink.isPurchased">
        Neuron Uplink: {{selectedSkill || 'No skill selected' }} +
        {{ gameStateStorage.neuronUplink.experienceIncrease }} experience per second.
        <br>
        <label for="skills">Choose a skill to automatically gain experience:</label>

        <select v-model="selectedSkill" name="skills" id="skills">
            <option v-for="skillName in computedActiveSkills" :skill-name="skillName" > 
                {{ skillName }}
            </option>
        </select>
    </template>
</template>