<script setup lang="ts">
import BuySchematic from './BuySchematic.vue';
import { schematicList } from '@/typescript/gameConstants/schematicList';
// Will need to import list of schematics and iterate over them
</script>
<template>
    <div class="shopTab schematicsColor">
        <BuySchematic v-for="schematic in schematicList" :schematicName="schematic" />
    </div>

</template>