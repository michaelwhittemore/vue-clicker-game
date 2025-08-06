<script setup lang="ts">
import { computed } from 'vue';
import { stateStorage } from '@/typescript/stateStorage';
import GenericResourceDisplay from './GenericResourceDisplay.vue';


const computedNonZeroAutomatons = computed(() => {
    // This might be easier with type assertions
    const automatons = stateStorage.automatons
    const automatonNames: Array<keyof typeof automatons> = Object.keys(automatons) as Array<keyof typeof automatons>;
    const filteredNames = automatonNames.filter(automatonName => stateStorage.automatons[automatonName] > 0)
    return filteredNames.map(name => {
        return {
            name,
            amount: automatons[name]
        }
    })
})
</script>

<template>
    <div id="displayWrapper">
        <div>Your Automatons</div>
        <div id="resourceDisplay">
            <!-- // might need to add a key, see the dos?? -->
            <GenericResourceDisplay v-for="automatonObject in computedNonZeroAutomatons" :resource-name="automatonObject.name"
                :resource-amount="automatonObject.amount" />
        </div>
    </div>

</template>

<style scoped>
/* if I use this a lot it may be worth making global utility class*/
#resourceDisplay {
    display: flex;
}

#displayWrapper {
    display: block;
    /* border-style: solid; */
    padding: .1em;
    margin: .1em;

}
</style>