<script setup lang="ts">
import LocationComponent from '../LocationComponent.vue';
import BuildAutomaton from '../RoboticsFabricatorComponents/BuildAutomaton.vue';
import { automatonsData } from '@/typescript/gameConstants/automatonsData';
</script>

<template>
    <LocationComponent :location-name="'Robotics Fabricator'">
        <BuildAutomaton v-for="(automatonValue, automatonName) in automatonsData" :automaton-type="automatonName"/>
    </LocationComponent>
</template>