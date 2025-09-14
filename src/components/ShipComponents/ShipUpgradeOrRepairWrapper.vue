<script setup lang="ts">
import { gameStateStorage } from '@/typescript/gameStateStorage';
import ShipRepairArea from './ShipRepairArea.vue';
import ShipUpgrade from './ShipUpgrade.vue';
// This conditionally displays either the repair or upgrade
</script>
<template>
<component :is="gameStateStorage.ship.isFixed ? ShipUpgrade : ShipRepairArea" />
</template>