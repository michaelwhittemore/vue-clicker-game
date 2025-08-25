<script setup lang="ts">
import { watch } from 'vue';
// Note that define props takes in the constructor hence 'String' vs 'string'
const props = defineProps({
    textForPopUp: String,
    garbageTrigger: Boolean
})
watch(() => props.garbageTrigger, () => {
    console.log(props.garbageTrigger)
})
// We will need to get the text from the props. We will also need to manage the state
// Either by eventing or maybe by having a timer? I'm unsure exactly how this will work.
// Let's start by just trying to trigger it once, this may be worth reddit/discord
// I could handle the event/onclick at the button level,but that seems like an issue of separation of
// concerns
// Oh! Maybe I can emit back to the parent?? - hmmm but then i still have the same issue of seperation
// of concerns?
// Hmmm maybe the button has the PopUpText? Like we do it here?
// HERE!
// --------------animation thoughts --------------
// maybe we start with opacity?
// It would be nice for the popup to start at slightly different palces, look into randomization
</script>
<template>
    <!-- The relative container is necessary for the element to have an ancestor but not reserved space-->
    <div class="popUpContainer">
        <!-- <div v-if="props.garbageTrigger" class="popUp outlinedText"> {{ props.textForPopUp }} </div> -->
        <div class="popUp animatedPopUp outlinedText"> {{ props.textForPopUp }} </div>
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

/* animation ---------------- */
.animatedPopUp {
    animation-duration: 5s;
    animation-name: rotateAway;
    animation-fill-mode: forwards;
    /* animation-name: slide-in; */
    /* animation-name: slide-in, fade-in; */
    /* animation-name: fade-out; */
    /* may need to add ` animation-fill-mode` */

}

@keyframes rotateAway {
    0% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }

    50% {
        transform: translateX(50px) translateY(-50px)rotate(45deg);
    }

    100% {
        opacity: 0;
        transform: translateX(100px) translateY(0px) rotate(90deg);
    }
}

@keyframes slide-in {
    from {
        translate: 150vw 0;
        scale: 200% 1;
    }

    to {
        translate: 0 0;
        scale: 100% 1;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
        /* Start completely transparent */
    }

    100% {
        opacity: 1;
    }
}

@keyframes fade-out {
    0% {
        opacity: 1;
        /* Start completely transparent */
    }

    100% {
        opacity: 0;
        /* display: none; */
    }
}
</style>