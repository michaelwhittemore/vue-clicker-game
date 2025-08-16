<script setup lang="ts">
import { computed, watch, useTemplateRef, nextTick } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

const narrativeTriggersToText = {
    hasMined: 'You find that the old mine still has plenty of ore remaining. You successfully extract some.',
    hasUnlockedPickaxeUpgrade1: 'After numerous subterranean hours, the rhythm of your pickaxe swings begin to feel natural. You believe your current tool is your only obstacle to further riches. (You can now wield the next tier of pickaxes).',
    hasUnlockedGoldMining: 'There\s much more to mining than you initially thought. As you familiarize yourself with the rock and soil, you discover that you can sometimes find specks of gold. (You\'ve unlocked the ability to occasionally find gold when mining. This chance scales with your level and does not apply to your automatons.)',
    hasRefinedOre: 'The machine\'s internal furnace roars and groans. From its molten innards emerges a single steel ingot.',
    hasBuiltAutoMiner: 'Like an off-world Prometheus, you have birthed life. Well, not "life" per se, and all you did was follow the manual, but you did manage to get a rather sad looking robot to emerge from the fabricator. It slowly shuffles off to the mines.',
    hasBuiltAutoRefiner: 'You fumble a bit, but eventually you get the fabricator to output a working robotic refining assistant. It dutifully takes its place next to the ore refiners and begins to work.',
    hasUnlockedAutoRefiner: 'You\'ve fabricated enough robots that you feel comfortable moving on to the "advanced" section of the manual. A section entitled "Automated Refining for Absolute Dumb-Dumbs" seems up your alley. (You can now build auto refiners)',
    hasMinedGold: 'Eureka! You\'ve found a nugget of gold within the ground.',
    tradingUnlock1: 'TODO',
}

const narrativeWrapperRef = useTemplateRef('narrativeWrapper')

const computedNarrativeText = computed(() => {
    return gameStateStorage.narrativeTriggersArray.map(trigger => narrativeTriggersToText[trigger])
});

watch(
    computedNarrativeText,
    async () => {
        await nextTick();
        if (narrativeWrapperRef.value){
            narrativeWrapperRef.value.scrollTop = narrativeWrapperRef.value.scrollHeight;
        }
    },
)
</script>
<template>
    <div ref="narrativeWrapper" id="narrativeWrapper">
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
    overflow: auto;
    height: 7em;    
}
</style>