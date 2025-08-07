<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps<{
    locationName: string,
    // colorScheme: string,
}>()
</script>

<template>
    <div class="locationWrapper">
        <div class="locationName">{{ props.locationName }}</div>
        <slot></slot>
    </div>
    
</template>

<style scoped>
.locationName{
    text-align: center;
}
.locationWrapper{
    height: 10em;
    width: 10em;
    padding: .2em;
    background-color: #a26769;
    border-style: dashed;
    margin: .5em;
}
</style>