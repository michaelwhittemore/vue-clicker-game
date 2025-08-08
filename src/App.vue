<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from './typescript/gameStateStorage';
// -------- Component Imports
import GenerateResourceButton from './components/GenerateResourceButton.vue';
import ResourceDisplay from './components/ResourceDisplay.vue';
import AutomatonDisplay from './components/AutomatonDisplay.vue';
import BuyAutomaton from './components/BuyAutomaton.vue';
import LocationComponent from './components/LocationComponent.vue';
import RefineButton from './components/RefineButton.vue';
import ExperienceBarHolder from './components/ExperienceBarHolder.vue';
import NarrativeText from './components/NarrativeText.vue';

</script>

<template>
  <NarrativeText /> 
  <div class="wrapper">
    <div id="displayArea" class="flexUtility">
      <ResourceDisplay />
      <AutomatonDisplay />
    </div>
    <ExperienceBarHolder />
    <div id="locationsHolder" class="flexUtility">
      <LocationComponent :location-name="'Mine'">
        <GenerateResourceButton :resource-type="'ore'" />
      </LocationComponent>

      <LocationComponent :location-name="'Refinery'">
        <RefineButton />
      </LocationComponent>

      <LocationComponent :location-name="'Robotics Fabricator'">
        <BuyAutomaton :automaton-type="'autoMiner'" />
        <BuyAutomaton :automaton-type="'autoRefiner'" />
      </LocationComponent>
    </div>

  </div>

  <main>
  </main>
</template>

<style scoped>
#locationsHolder {
  display: flex
}
</style>
