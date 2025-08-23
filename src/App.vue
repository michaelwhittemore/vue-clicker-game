<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from './typescript/gameStateStorage';
// -------- Component Imports
import GenerateResourceButton from './components/GenerateResourceButton.vue';
import ResourceDisplay from './components/ResourceDisplay.vue';
import AutomatonDisplay from './components/AutomatonDisplay.vue';
import BuildAutomaton from './components/BuildAutomaton.vue';
import LocationComponent from './components/Locations/LocationComponent.vue';
import RefineButton from './components/RefineButton.vue';
import ExperienceBarHolder from './components/ExperienceBarHolder.vue';
import NarrativeText from './components/NarrativeText.vue';
import BuyPickaxeUpgrade from './components/ShopComponents/BuyPickaxeUpgrade.vue';

</script>

<template>
  <NarrativeText />
  <div id="locationsHolder" class="flexUtility">
    <LocationComponent :location-name="'Mine'">
      <GenerateResourceButton :resource-type="'ore'" />
    </LocationComponent>

    <LocationComponent :location-name="'Refinery'">
      <RefineButton />
    </LocationComponent>

    <!--- TODO - refactor this to be its own component-->
    <LocationComponent :location-name="'Robotics Fabricator'">
      <BuildAutomaton :automaton-type="'autoMiner'" />
      <BuildAutomaton :automaton-type="'autoRefiner'" />
      <BuildAutomaton :automaton-type="'autoGoldMiner'" />
    </LocationComponent>

    <LocationComponent :location-name="'Shop'">
      <BuyPickaxeUpgrade />
      
    </LocationComponent>
  </div>

  <div id="displayArea" class="flexUtility">
    <ResourceDisplay />
    <AutomatonDisplay />
  </div>
  <ExperienceBarHolder />



  <main>
  </main>
</template>

<style scoped>
#locationsHolder {
  display: flex
}
</style>
