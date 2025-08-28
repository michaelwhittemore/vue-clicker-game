<script setup lang="ts">
import LocationComponent from './LocationComponent.vue';
import BuyPickaxeUpgrade from '../ShopComponents/BuyPickaxeUpgrade.vue';
import BuyShip from '../ShopComponents/BuyShip.vue';
import SellResourceForGold from '../ShopComponents/SellResourceForGold.vue';
</script>

<template>
    <LocationComponent :location-name="'Shop'">
      <BuyPickaxeUpgrade />
      <BuyShip /> 
      <SellResourceForGold resource-type="ore"/>
      <SellResourceForGold resource-type="steel"/>
      
    </LocationComponent>
</template>