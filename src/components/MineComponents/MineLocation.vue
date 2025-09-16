<script setup lang="ts">
import LocationComponent from '../UtilityComponents/LocationComponent.vue';
import MineResourceButton from './MineResourceButton.vue';
import MineSplitWrapper from './MineSplitWrapper.vue';
import { gameStateStorage } from '@/typescript/gameStateStorage';

</script>
<template>
    <LocationComponent :location-name="'Mine'">
        <template v-if="!gameStateStorage.prospectingTool.isPurchased"> 
            <MineResourceButton :resource-type="'ore'" />
        </template>
        <template v-if="gameStateStorage.prospectingTool.isPurchased"> 
            <MineSplitWrapper />
        </template>
    </LocationComponent>
</template>