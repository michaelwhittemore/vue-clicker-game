<script setup lang="ts">

const props = defineProps<{
    locationName: string,
}>()
</script>

<template>
    <div class="locationWrapper">
        <div class="locationName">{{ props.locationName }}</div>
        <!-- The slotted component is passed in from the individual location -->
        <slot></slot>
    </div>
    
</template>

<style>
.locationName{
    text-align: center;
}
.locationWrapper{
    height: 15em;
    width: 12em;
    /* EM might not be good practice here, maybe pixels instead */
    padding: .2em;
    background-color: #a26769;
    border-style: dashed;
    margin: .5em;
    overflow: auto;
}
</style>