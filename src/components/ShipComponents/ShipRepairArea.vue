<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import ShipRepairButton from './ShipRepairButton.vue';
// We will want a narrative trigger when the ship is fully complete
// Will need a repair button component
// 
</script>
<template>
    <div class="shipUpgradeColor shopTab">
        <ShipRepairButton v-for="(value, key) in gameStateStorage.ship.requiredRepairs" :repair-type="key" />
    </div>
</template>