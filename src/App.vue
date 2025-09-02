<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from './typescript/gameStateStorage';
// -------- Component Imports
import ResourceDisplay from './components/GeneralDisplayComponents/ResourceDisplay.vue';
import AutomatonDisplay from './components/GeneralDisplayComponents/AutomatonDisplay.vue';
import ExperienceBarHolder from './components/GeneralDisplayComponents/ExperienceBarHolder.vue';
import NarrativeText from './components/NarrativeText.vue';
import ShopLocation from './components/Locations/ShopLocation.vue';
import RoboticsFabricator from './components/Locations/RoboticsFabricator.vue';
import MineLocation from './components/Locations/MineLocation.vue';
import RefineryLocation from './components/RefineryComponents/RefineryLocation.vue';
</script>

<template>
  <NarrativeText />
  <!-- The locations holder will likely be where we need to use the `is` keyword and dynamic tabs -->
  <div id="locationsHolder" class="flexUtility">
    <MineLocation />
    <RefineryLocation />
    <RoboticsFabricator />
    <ShopLocation />
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
