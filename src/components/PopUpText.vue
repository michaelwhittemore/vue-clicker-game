<script setup lang="ts">
const text = '+1'
// I want the text to be fairly bold and block. 
</script>
<template>
    <!-- The relative container is necessary for the element to have an ancestor but not reserved space-->
    <div class="popUpContainer">
        <div class="popUp outlinedText"> {{ text }} </div>
    </div>
    
    
</template>
<style scoped>
.popUp {
    color: green;
    font-weight: bold;
    position: absolute;
    font-size: 150%;
    bottom: 10px;
    right: -15px;
}
.popUpContainer {
    position: relative;
}
</style>