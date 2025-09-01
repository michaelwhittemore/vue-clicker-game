<script setup lang="ts">
import RefineButton from '../RefineButton.vue';
import LocationComponent from './LocationComponent.vue';
// HERE! - I think we should iterate over the schematics? and display them if they are in unlocked
// schematics but not refineryUpgrades. Will need a list of possible refinery upgrades? just an array - 
// maybe it should live in schematicData
</script>
<template> 
    <LocationComponent :location-name="'Refinery'">
      <RefineButton />
    </LocationComponent>
</template>