<script setup lang="ts">
// Will need props (name and number)
const props = defineProps({
    resourceName: String,
    resourceAmount: Number,
})
</script>

<template>
    <div>{{ resourceName + 's: ' + resourceAmount}}</div>
</template>

<style scoped></style>