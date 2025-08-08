<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
import { computed, ref } from 'vue';
import type { ValidSkills } from '@/typescript/gameTypes';
const props = defineProps<{
    skillName: ValidSkills,
}>()

const computedPercentage = computed(() => {
    // truncates to two decimals (first 100 creates the percent, second for truncating)
    return Math.trunc((stateStorage.skills[props.skillName].experience / 
    stateStorage.skills[props.skillName].targetExperience) * 100 * 100) /100
    
})

</script>
<template>
    <!-- might want to make skill name uppercase -->
    <div class="outerBar">
        <div class="barText">
            {{ skillName }} level: {{ stateStorage.skills[skillName].level }}

        </div>
        <div class="barText centeredText"> {{ stateStorage.skills[skillName].experience +
            '/' + stateStorage.skills[skillName].targetExperience }} ({{ computedPercentage + '%' }}) </div>
        <div class="innerBar" :style="{ width: computedPercentage + '%' }"> </div>
    </div>
</template>
<style>
.barText {
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 1;
}

.outerBar {
    position: relative;
    height: 1.25em;
    margin: .1em;
    width: 95%;
    background-color: blanchedalmond;
    border-style: solid;
    border-color: #a0a083;
}

.innerBar {
    position: absolute;
    top: 0px;
    height: 100%;
    background-color: #b2d2e3;
}
</style>