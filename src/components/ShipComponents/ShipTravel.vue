<script setup lang="ts">
const onClick = () => {
    console.warn('Vroooooom')
}
</script>
<template>
    <div class="shipTravelColor selectableTab">
        <button @click="onClick">Launch (need to add oil cost)</button>
    </div>

</template>
