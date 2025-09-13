<script setup lang="ts">
import RefineButton from '../RefineryComponents/RefineButton.vue';
import UpgradeRefineryButton from '../RefineryComponents/UpgradeRefineryButton.vue';
import LocationComponent from '../LocationComponent.vue';

</script>
<template> 
    <LocationComponent :location-name="'Refinery'">
      <RefineButton />
      <UpgradeRefineryButton :upgradeName="'improvedRefineryHopper'"/> 
      <UpgradeRefineryButton :upgradeName="'improvedRefineryFurnace'"/> 
    </LocationComponent>
</template>