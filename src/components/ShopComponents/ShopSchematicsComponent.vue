<script setup lang="ts">
import BuySchematic from './BuySchematic.vue';
import { schematicsData } from '@/typescript/gameConstants/schematicsData';
// Will need to import list of schematics and iterate over them
// Will need to add the price to button.

// Maybe all the logic should be in here and not in the separate TS file??
</script>
<template>
    <div class="selectableTab schematicsColor">
        <BuySchematic v-for="(value, key) in schematicsData" :schematicName="key"/>
    </div>

</template>