<script setup lang="ts">
// Will need props (name and number)
const props = defineProps({
    resourceName: String,
    resourceAmount: Number,
})
</script>

<template>
    <p>{{ resourceName + 's: ' + resourceAmount}}</p>
</template>

<style></style>