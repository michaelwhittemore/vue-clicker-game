<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import ShipRepair from './ShipRepair.vue';
import ShipUpgrade from './ShipUpgrade.vue';
// This conditionally displays either the repair or upgrade
</script>
<template>
<component :is="gameStateStorage.ship.isFixed ? ShipUpgrade : ShipRepair" />
</template>