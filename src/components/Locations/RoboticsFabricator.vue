<script setup lang="ts">
import LocationComponent from './LocationComponent.vue';
import BuildAutomaton from '../RoboticsFabricatorComponents/BuildAutomaton.vue';
import type { ValidAutomatons } from '@/typescript/gameTypes';
const automatonList: Array<ValidAutomatons> = ['autoMiner', 'autoRefiner', 'autoGoldMiner']
</script>

<template>
    <LocationComponent :location-name="'Robotics Fabricator'">
        <BuildAutomaton v-for="automatonName in automatonList" :automaton-type="automatonName"/>
    </LocationComponent>
</template>