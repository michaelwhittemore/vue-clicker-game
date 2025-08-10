<script setup lang="ts">
import { computed } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

const narrativeTriggersToText = {
    hasMined: 'You find that the old mine still has plenty of ore remaining. You successfully extract some.',
    hasLeveledMining: 'After numerous subterranean hours, the rhythm of your pickaxe swings begin to feel natural. You believe your current tool is your only obstacle to further riches. (You can now wield the next tier of pickaxes).',
    hasRefinedOre: 'The machine\'s internal furnace roars and groans. From its molten innards emerges a single steel ingot.',
    hasBuiltAutoMiner: 'Like an off-world Prometheus, you have birthed life. Well, not "life" per se, and all you did was follow the manual, but you did manage to get a rather sad looking robot to emerge from the fabricator. It slowly shuffles off to the mines.',
    hasBuiltAutoRefiner: 'Yay you built an autorefiner. Now build some actuyal readable text for me.'
}

const computedNarrativeText = computed(() => {
    return gameStateStorage.narrativeTriggersArray.map(trigger => narrativeTriggersToText[trigger])
})
</script>
<template>
    <div id="narrativeWrapper">
        <div class="narrativeEntry">
            You find yourself in a backwater mining settlement. The husks of abandoned buildings loom over
            rusting excavators and long dead robots. Inside one of these structures you find a grimy but still usable
            ore refiner.
            You also find an automaton fabricator. It's primitive by modern galactic standards, with some steel you
            could probably create a simple mining robot. At the edge of town an open pit descends into the mines.
            You ready your pickaxe.
        </div>
        <div v-for="narrativeText in computedNarrativeText"> {{ narrativeText }} </div>
    </div>
</template>
<style>
/* .narrativeEntry{

} */
#narrativeWrapper {
    padding: .2em;
    border-style: double;
    background-color: #f6eee3;
    /* // need this to scroll, should have height or max height?*/
}
</style>