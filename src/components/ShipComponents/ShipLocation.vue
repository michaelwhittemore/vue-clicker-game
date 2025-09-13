<script setup lang="ts">
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';


</script>
<template>
    <template v-if="gameStateStorage.ship.isPurchased">
        <LocationComponent :location-name="'Ship'"></LocationComponent>
    </template>
</template>