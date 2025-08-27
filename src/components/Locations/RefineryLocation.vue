<script setup lang="ts">
import RefineButton from '../RefineButton.vue';
import LocationComponent from './LocationComponent.vue';
</script>
<template> 
    <LocationComponent :location-name="'Refinery'">
      <RefineButton />
    </LocationComponent>
</template>