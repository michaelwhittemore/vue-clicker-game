<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from './typescript/gameStateStorage';
// -------- Component Imports
import GenerateResourceButton from './components/GenerateResourceButton.vue';
import ResourceDisplay from './components/ResourceDisplay.vue';
import AutomatonDisplay from './components/AutomatonDisplay.vue';
import LocationComponent from './components/Locations/LocationComponent.vue';
import RefineButton from './components/RefineButton.vue';
import ExperienceBarHolder from './components/ExperienceBarHolder.vue';
import NarrativeText from './components/NarrativeText.vue';
import ShopLocation from './components/Locations/ShopLocation.vue';
import RoboticsFabricator from './components/Locations/RoboticsFabricator.vue';

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
