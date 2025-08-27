<script setup lang="ts">
import LocationComponent from './LocationComponent.vue';
import BuildAutomaton from '../RoboticsFabricatorComponents/BuildAutomaton.vue';
</script>

<template>
    <LocationComponent :location-name="'Robotics Fabricator'">
        <BuildAutomaton :automaton-type="'autoMiner'" />
        <BuildAutomaton :automaton-type="'autoRefiner'" />
        <BuildAutomaton :automaton-type="'autoGoldMiner'" />
    </LocationComponent>
</template>