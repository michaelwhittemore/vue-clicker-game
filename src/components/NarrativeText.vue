<script setup lang="ts">
import { computed, watch, useTemplateRef, nextTick } from 'vue';
import type { NarrativeTrigger } from '@/typescript/gameTypes';
import { gameStateStorage } from '@/typescript/gameStateStorage';

const narrativeTriggersToText: Record<NarrativeTrigger, string> = {
    gameStart:'You find yourself in a backwater mining settlement. The husks of abandoned buildings loom over rusting excavators and long dead robots. Inside one of these structures you find a grimy but still usable ore refiner. You also find an automaton fabricator. It\'s primitive by modern galactic standards, with some steel you could probably create a simple mining robot. At the edge of town an open pit descends into the mines. You ready your pickaxe.',
    hasMined: 'You find that the old mine still has plenty of ore remaining. You successfully extract some.',
    hasUnlockedPickaxeUpgrade1: 'After numerous subterranean hours, the rhythm of your pickaxe swings begin to feel natural. You believe your current tool is your only obstacle to further riches. (You can now wield the next tier of pickaxes).',
    hasUnlockedGoldMining: 'There\s much more to mining than you initially thought. As you familiarize yourself with the rock and soil, you discover that you can sometimes find specks of gold. (You\'ve unlocked the ability to occasionally find gold when mining. This chance scales with your level and does not apply to your automatons.)',
    hasRefinedOre: 'The machine\'s internal furnace roars and groans. From its molten innards emerges a single steel ingot.',
    hasBuiltAutoMiner: 'Like an off-world Prometheus, you have birthed life. Well, not "life" per se, and all you did was follow the manual, but you did manage to get a rather sad looking robot to emerge from the fabricator. It slowly shuffles off to the mines.',
    hasBuiltAutoRefiner: 'You fumble a bit, but eventually you get the fabricator to output a working robotic refining assistant. It dutifully takes its place next to the ore refiners and begins to work.',
    hasUnlockedAutoRefiner: 'You\'ve fabricated enough robots that you feel comfortable moving on to the "advanced" section of the manual. A section entitled "Automated Refining for Absolute Dumb-Dumbs" seems up your alley. (You can now build auto refiners)',
    hasMinedGold: 'Eureka! You\'ve found a nugget of gold within the ground.',
    hasUnlockedShop: 'A rusted and beaten shuttle descends from the skies. Its landing gear creaks as it settles into the center of town. An alien - presumably drawn by the smoke of your refineries- emerges and wearily looks around. It\'s wearing a leather duster and ten gallon hat, both of which look comically oversized on the lithe species which you don\'t recognize. The alien throws up a door on its ship to reveal an array of mining equipment. After some crude pantomiming you manage to get a price estimate for the gear. ',
    hasUpgradedPickaxe: 'The alien hands you the tool in exchange for your gold. It immediately feels like an improvement over your previous pickaxe. With your skills, you feel that you\'ll be able to mine far more efficiently. (You have increased the amount of ore that you get from each swing. Future pickaxe upgrades will increase this bonus further.)',
    hasUnlockedAutoGoldMiner: 'TODO, has unlocked auto gold miner, something to the effect of ',
    hasBuiltAutoGoldMiner: 'TODO hasBuiltAutoGoldMiner (not unlocked) ',
    tradingUnlock1: 'You have done a fair deal of buying and selling. Your haggling skills now allow you to sell resources at a better rate. (Leveling trading further will increase this bonus)',
}

// We need the template ref in order to access the scroll behavior
const narrativeWrapperRef = useTemplateRef('narrativeWrapper')

const computedNarrativeText = computed(() => {
    return gameStateStorage.narrativeTriggersArray.map(trigger => narrativeTriggersToText[trigger])
});

watch(
    computedNarrativeText,
    async () => {
        // next tick is necessary otherwise we scroll before adding the next entry
        await nextTick();
        if (narrativeWrapperRef.value){
            narrativeWrapperRef.value.scrollTop = narrativeWrapperRef.value.scrollHeight;
        }
    },
)
</script>
<template>
    <div ref="narrativeWrapper" id="narrativeWrapper">
        <div class="narrativeEntry"   v-for="narrativeText in computedNarrativeText"> {{ narrativeText }} </div>
    </div>
</template>
<style>
.narrativeEntry{
    animation-duration: 1.5s;
    animation-name: animate-pop;
    margin-top: .3em;
    margin-bottom: .3em;
}
.narrativeEntry:first-child{
    margin-top: 0;
}
.narrativeEntry:last-child{
    margin-bottom: 0;
}
#narrativeWrapper {
    padding: .2em;
    border-style: double;
    background-color: #f6eee3;
    overflow: auto;
    height: 7em;    
}
@keyframes animate-pop {
  0% {
    opacity: 0;
    transform: scale(0.9, 0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
}
</style>