<script setup lang="ts">
const props = defineProps<{
    resourceName: string, // need to check for automatons
    resourceAmount: number,
}>()
</script>

<template>
    <div class="resourceDisplayContainer color1 tooltipContainer">{{ resourceName + ': ' + resourceAmount}}
    </div>
</template>

<style scoped>
.resourceDisplayContainer{
    border-style: solid;
    margin: .2em;
    padding: .1em .2em .1em .2em
}
</style>