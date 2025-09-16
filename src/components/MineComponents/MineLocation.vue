<script setup lang="ts">
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import MineResourceButton from './MineResourceButton.vue';
import ProspectForResourcesButton from './ProspectForResourcesButton.vue';
</script>
<template>
    <LocationComponent :location-name="'Mine'">
        <MineResourceButton :resource-type="'ore'" />
        <ProspectForResourcesButton />
    </LocationComponent>
</template>