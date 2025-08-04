<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import ClickButton from './components/ClickButton.vue';
import DisplayProps from './components/DisplayProps.vue';
import { stateStorage } from './typescript/stateStorage';

const greeting = ref('Hello from parent')
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
      <ClickButton />
      <DisplayProps :msg="greeting"/>
      <DisplayProps :msg2="stateStorage.count"/>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
</style>
