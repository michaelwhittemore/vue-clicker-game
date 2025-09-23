<script setup lang="ts">
import MineOreButton from './MineOreButton.vue';
import MineGoldVein from './MineGoldVein.vue';

</script>
<template>
  <div class="miningColor selectableTab">
    <MineOreButton :resource-type="'ore'" />
    <MineGoldVein />
  </div>

</template>
