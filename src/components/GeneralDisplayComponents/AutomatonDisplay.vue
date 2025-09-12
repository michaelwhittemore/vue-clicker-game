<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import GenericAssetDisplay from './GenericAssetDisplay.vue';
import { readableTextMap } from '@/typescript/gameConstants/readableTextMap';


const computedNonZeroAutomatons = computed(() => {
    // This might be easier with type assertions
    const automatons = gameStateStorage.automatons
    const automatonNames: Array<keyof typeof automatons> = Object.keys(automatons) as Array<keyof typeof automatons>;
    const filteredNames = automatonNames.filter(automatonName => gameStateStorage.automatons[automatonName] > 0)
    return filteredNames.map(name => {
        return {
            name,
            amount: automatons[name]
        }
    })
})
</script>

<template>
    <div id="displayWrapper" v-if="computedNonZeroAutomatons.length > 0">
        <div>Your Automatons</div>
        <div id="resourceDisplay">
            <!-- // might need to add a key, see the dos?? -->
            <GenericAssetDisplay v-for="automatonObject in computedNonZeroAutomatons" :resource-name="readableTextMap[automatonObject.name]"
                :resource-amount="automatonObject.amount" is-resource="false"/>
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