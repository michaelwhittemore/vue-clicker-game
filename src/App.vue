<script setup lang="ts">
import { ref } from 'vue';
import { stateStorage } from './typescript/stateStorage';
// -------- Component Imports
import DisplayProps from './components/DisplayProps.vue';
import GenerateCurrencyButton from './components/GenerateCurrencyButton.vue';
import ResourceDisplay from './components/ResourceDisplay.vue';

const greeting = ref('Hello from parent')
</script>

<template>
  <!-- Will need to move stuff around, this shouldn't be in the header -->
  <header>
  </header>

  <div class="wrapper">
    <ResourceDisplay />
    <ClickButton />
    <!-- <DisplayProps :msg="greeting" /> -->
    <GenerateCurrencyButton />
  </div>

  <main>
  </main>
</template>

<style scoped></style>
