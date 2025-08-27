<script setup lang="ts">
import LocationComponent from './LocationComponent.vue';
import BuyPickaxeUpgrade from '../ShopComponents/BuyPickaxeUpgrade.vue';
import BuyShip from '../ShopComponents/BuyShip.vue';
import SellSteelForGold from '../ShopComponents/SellSteelForGold.vue';
</script>

<template>
    <LocationComponent :location-name="'Shop'">
      <BuyPickaxeUpgrade />
      <BuyShip /> 
      <SellSteelForGold />
      
    </LocationComponent>
</template>