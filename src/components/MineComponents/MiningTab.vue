<script setup lang="ts">
import MineOreButton from './MineOreButton.vue';
import MineGoldVein from './MineGoldVein.vue';
import ExtractOilButton from './ExtractOilButton.vue';
</script>
<template>
  <div class="miningColor selectableTab">
    <MineOreButton :resource-type="'ore'" />
    <ExtractOilButton />
    <MineGoldVein />
  </div>

</template>
