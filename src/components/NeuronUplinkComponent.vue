<script setup lang="ts">
import { computed } from 'vue';
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
</script>
<template>
    <template v-if="true">
        Neuron Uplink: No skill selected
        <br>
        <label for="skills">Choose a skill to automatically gain experience:</label>

        <select name="skills" id="skills">
            <option v-for="skillName in computedActiveSkills" :skill-name="skillName"> 
                {{ skillName }}
            </option>
        </select>
    </template>
</template>