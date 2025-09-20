<script setup lang="ts">
import MineResourceButton from './MineResourceButton.vue';
import MineGoldVein from './MineGoldVein.vue';

</script>
<template>
  <div class="miningColor selectableTab">
    <MineResourceButton :resource-type="'ore'" />
    <MineGoldVein />
  </div>

</template>
