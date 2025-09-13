<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from './typescript/gameStateStorage';
// -------- Component Imports
import ResourceDisplayArea from './components/GeneralDisplayComponents/ResourceDisplayArea.vue';
import AutomatonDisplayArea from './components/GeneralDisplayComponents/AutomatonDisplayArea.vue';
import ExperienceBarHolder from './components/GeneralDisplayComponents/ExperienceBarHolder.vue';
import NarrativeText from './components/NarrativeText.vue';
import NeuronUplinkComponent from './components/NeuronUplinkComponent.vue';
// Locations
import ShopLocation from './components/ShopComponents/ShopLocation.vue'
import RoboticsFabricator from './components/RoboticsFabricatorComponents/RoboticsFabricator.vue';
import MineLocation from './components/MineComponents/MineLocation.vue';
import RefineryLocation from './components/RefineryComponents/RefineryLocation.vue';
import ShipLocation from './components/ShipComponents/ShipLocation.vue';
</script>

<template>
  <NarrativeText />
  <div id="locationsHolder" class="flexUtility">
    <MineLocation />
    <RefineryLocation />
    <RoboticsFabricator />
    <ShopLocation />
    <ShipLocation />
  </div>

  <div id="displayArea" class="flexUtility">
    <ResourceDisplayArea />
    <AutomatonDisplayArea />
  </div>
  <NeuronUplinkComponent />
  <ExperienceBarHolder />


  <main>
  </main>
</template>

<style scoped>
#locationsHolder {
  display: flex
}
</style>
