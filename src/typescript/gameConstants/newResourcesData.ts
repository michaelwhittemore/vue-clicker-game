import type { ValidNarrativeTrigger, ValidResources } from "../gameTypes"

interface ResourceData {
  requiredLevel: number, // mining Level
  searchDuration: number, // Time to find
  baseSuccessChance: number,
  narrativeTriggerOnSuccess: ValidNarrativeTrigger,
}
// TODO - this is broken, can use bad keys which aren't member of ValidResources
export const newResourcesData:{ [key: ValidResources]: ResourceData }  = {
  'oil': {
    requiredLevel: 1,
    searchDuration: 10,
    baseSuccessChance: 100,
    narrativeTriggerOnSuccess: 'discoveredOil',
  },
  'plastic': {
    requiredLevel: 1,
    searchDuration: 10,
    baseSuccessChance: 100,
    narrativeTriggerOnSuccess: 'discoveredOil',
  },
  'badKey': {
    requiredLevel: 1,
    searchDuration: 10,
    baseSuccessChance: 100,
    narrativeTriggerOnSuccess: 'discoveredOil',
  }
}

// Maybe we export an array
