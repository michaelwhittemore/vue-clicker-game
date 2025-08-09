<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
// Hmm maybe we have a text JSON asset? 
// What determines if we add stuff? Maybe it's computed via state storage
// Also maybe we should frame this as a journal??

/*
1. Add Text snippets for first time:
    - getting ore "You find that the old mine still has plenty of ore remaining. You successfully
    extract some."
    - refining steel
    - Building an autominer
    - leveling up mining - "After numerous subterranean hours,  Mining starts to feel more familiar/natural (something about 
    the the rhythm of the pickaxe). You feel like your current instrument is your only obstacle to further riches."
2. These should correspond to a series of bools on the storage
3. I think we will need a seperate map of all the text
4. Then iterate over all of it
5. Need to modify this not to use <p> tags and use custom divs instead
*/


const narrativeTriggersToText = {
    hasMined: 'hasMined text',
    hasBuiltAutoMiner: 'hasBuiltAutoMiner text',
    hasLeveledMining: ' hasLeveledMining text',
    hasRefinedOre: 'hasRefinedOre text',
}

// Returns an array of the text of narrativeTriggersToText where narrativeTriggers is true
const computedTriggeredText = computed(() => {
    return (Object.keys(gameStateStorage.narrativeTriggers) as Array<keyof typeof gameStateStorage.narrativeTriggers>)
        .filter(trigger => gameStateStorage.narrativeTriggers[trigger]).map(trigger => narrativeTriggersToText[trigger])
})
</script>
<template>
    <div id="narrativeWrapper">
        <p>
            You find yourself in a backwater mining settlement. The husks of abandoned buildings loom over
            rusting excavators and long dead robots. Inside one of these structures you find a grimy but still usable
            ore
            refiner.
            You also find an automaton fabricator. It's primitive by modern galactic standards, with some steel you
            could probably create a simple mining robot. At the edge of town an open pit descends into the mines.
            You ready your pickaxe.
        </p>
        <p v-for="narrativeText in computedTriggeredText"> {{ narrativeText }} </p>
    </div>
</template>
<style>
#narrativeWrapper {
    padding: .1em;
    border-style: double;
    background-color: #f6eee3;
    /* // need this to scroll */
}
</style>