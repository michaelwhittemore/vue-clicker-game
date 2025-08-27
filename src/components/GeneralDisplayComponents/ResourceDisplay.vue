<script setup lang="ts">
import { ref } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import GenericResourceDisplay from './GenericResourceDisplay.vue';
// Might make sense to have reusable display for each kind 
// Also do something when they're zero? Maybe change color based on scale?
</script>

<template>
    <div id="displayWrapper">
        <div>Current Resources</div>
        <div id="resourceDisplay">
            <!-- // might need to add a key, see the dos?? -->
            <GenericResourceDisplay v-for="(value, key) in gameStateStorage.resources" :resource-name="key"
                :resource-amount="value" />
        </div>
    </div>

</template>

<style scoped>
/* if I use this a lot it may be worth making global utility class*/
#resourceDisplay {
    display: flex;
}

#displayWrapper {
    /* This should probably be global and also look nicer */
    display: block;
    /* border-style: solid; */
    padding: .1em;
    margin: .1em;

}
</style>