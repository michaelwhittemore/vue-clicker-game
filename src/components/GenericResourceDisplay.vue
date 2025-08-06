<script setup lang="ts">
const props = defineProps({
    resourceName: String,
    resourceAmount: Number,
})
</script>

<template>
    <!-- Will need to change color based on the numeric value -->
    <div class="resourceDisplayContainer color1">{{ resourceName + ': ' + resourceAmount}}</div>
</template>

<style scoped>
.resourceDisplayContainer{
    border-style: solid;
    margin: .2em;
    padding: .1em .2em .1em .2em
}
</style>