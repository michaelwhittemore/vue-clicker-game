<script setup lang="ts">
import { computed, watch, useTemplateRef, nextTick } from 'vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';
import { narrativeTriggersToText } from '@/typescript/gameConstants/narrativeTriggersToText';

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