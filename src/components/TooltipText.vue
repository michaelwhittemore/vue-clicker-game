<script setup lang="tsx">
const props = defineProps<{
    tooltipText: string | number,
}>()
</script>
<template>
    <span class="tooltipText">{{ tooltipText }} </span>
</template>