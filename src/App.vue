<script setup lang="ts">
import { ref } from 'vue';
import { stateStorage } from './typescript/stateStorage';
// -------- Component Imports
import GenerateResourceButton from './components/GenerateResourceButton.vue';
import ResourceDisplay from './components/ResourceDisplay.vue';
import BuyAutoHelper from './components/BuyAutoHelper.vue';

</script>

<template>
  <!-- Will need to move stuff around, this shouldn't be in the header -->
  <header>
    Vue clicker
  </header>
  <p>
    <!-- This could probably have a flavor text component - we will need it to change over time -->
    You find yourself in a backwater mining settlement. The husks of abandoned buildings loom over
    rusting excavators and long dead robots.
  </p>
  <div class="wrapper">
    <ResourceDisplay />

    <div class="area" id="mineArea">
    <GenerateResourceButton />
    </div>
    <div class="area" id="roboticsLabArea">
      <BuyAutoHelper />
    </div>
  </div>

  <main>
  </main>
</template>

<style scoped></style>
