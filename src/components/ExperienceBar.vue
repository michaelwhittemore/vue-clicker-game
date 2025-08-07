<script setup lang="ts">
import { stateStorage } from '@/typescript/stateStorage';
import { computed } from 'vue';
import type { ValidSkills } from '@/typescript/gameTypes';
const props = defineProps<{
    skillName: ValidSkills,
}>()

</script>
<template>
    <!-- might want to make skill name uppercase -->
    <div class="outerBar"> 
        <span> {{ skillName }} level: {{ stateStorage.skills[skillName]?.level }} </span>
        <div class="innerBar"> I'm the inner bar</div>
    </div>
</template>
<style>
.outerBar{
    margin: .1em;
    width: 95%;
    background-color: blanchedalmond;
    border-style: solid;
    border-color: #a0a083;
}
.innerBar{
    position: relative;
    /* width: 95%; */
    height: 100%;
    background-color: blue;
}
</style>