<script setup lang="ts">
import { ref } from 'vue';
import { stateStorage } from './typescript/stateStorage';
// -------- Component Imports
import ClickButton from './components/ClickButton.vue';
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
    <DisplayProps :msg="greeting" />
    <DisplayProps :msg2="stateStorage.count" />
    <GenerateCurrencyButton />
  </div>

  <main>
  </main>
</template>

<style scoped></style>
