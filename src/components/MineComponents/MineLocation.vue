<script setup lang="ts">
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import MineResourceButton from './MineResourceButton.vue';
</script>
<template>
    <LocationComponent :location-name="'Mine'">
        <MineResourceButton :resource-type="'ore'" />
    </LocationComponent>
</template>