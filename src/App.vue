<script setup lang="ts">
import { ref } from 'vue';
import { stateStorage } from './typescript/stateStorage';
// -------- Component Imports
import GenerateResourceButton from './components/GenerateResourceButton.vue';
import ResourceDisplay from './components/ResourceDisplay.vue';
import AutomatonDisplay from './components/AutomatonDisplay.vue';
import BuyAutomaton from './components/BuyAutomaton.vue';
import LocationComponent from './components/LocationComponent.vue';
import RefineButton from './components/RefineButton.vue';
import ExperienceBar from './components/ExperienceBar.vue';

</script>

<template>
  <p>
    <!-- This could probably have a flavor text component - we will need it to change over time -->
    You find yourself in a backwater mining settlement. The husks of abandoned buildings loom over
    rusting excavators and long dead robots. Inside one of these structures you find a grimy but still usable ore
    refiner.
    You also find an automaton fabricator. It's primitive by modern galactic standards, with some steel you
    could probably create a simple mining robot. At the edge of town an open pit descends into the mines.
    You ready your pickaxe.
  </p>
  <div class="wrapper">
    <div id="displayArea" class="flexUtility"> 
      <ResourceDisplay />
      <AutomatonDisplay />
    </div>
    <ExperienceBar :skill-name="'mining'"/>
    <div id="locationsHolder" class="flexUtility">
      <LocationComponent :location-name="'Mine'">
        <GenerateResourceButton />
      </LocationComponent>

      <LocationComponent :location-name="'Refinery'">
        <RefineButton />
      </LocationComponent>
  
      <LocationComponent :location-name="'Robotics Fabricator'">
        <BuyAutomaton :automaton-type="'autoMiner'"/>
        <BuyAutomaton :automaton-type="'autoRefiner'"/>
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
