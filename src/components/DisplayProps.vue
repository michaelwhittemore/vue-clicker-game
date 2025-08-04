<script setup lang="ts">
defineProps({
    msg: String,
    msg2: Number
})
</script>

<template>
    <h2>{{ msg || msg2}}</h2>
</template>