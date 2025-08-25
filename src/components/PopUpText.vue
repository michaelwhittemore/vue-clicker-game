<script setup lang="ts">
// defineProps(<{
//   text: string,
// }>)
const text = '+1 ore';
// We will need to get the text from the props. We will also need to manage the state
// Either by eventing or maybe by having a timer? I'm unsure exactly how this will work.
// Let's start by just trying to trigger it once, this may be worth reddit/discord
// HERE!
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