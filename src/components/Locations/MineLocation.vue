<script setup lang="ts">
import LocationComponent from './LocationComponent.vue';
import MineOreButton from '../MineOreButton.vue';
</script>
<template>
    <LocationComponent :location-name="'Mine'">
        <MineOreButton :resource-type="'ore'" />
    </LocationComponent>
</template>