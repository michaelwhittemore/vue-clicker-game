<script setup lang="ts">
import LocationComponent from './LocationComponent.vue';
import GenerateResourceButton from '../GenerateResourceButton.vue';
</script>
<template>
    <LocationComponent :location-name="'Mine'">
        <GenerateResourceButton :resource-type="'ore'" />
    </LocationComponent>
</template>