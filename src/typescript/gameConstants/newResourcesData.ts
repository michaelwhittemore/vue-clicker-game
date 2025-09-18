import type { ValidNarrativeTrigger, ValidResources } from "../gameTypes"

interface ResourceData {
  name: ValidResources,
  requiredLevel: number, // mining Level
  searchDuration: number, // Time to find
  baseSuccessChance: number,
  narrativeTriggerOnSuccess: ValidNarrativeTrigger,
  experienceValue: number,
}
// TODO - all the values are wrong!
export const newResourcesData: Array<ResourceData> = [
  {
    name: "oil",
    requiredLevel: 4,
    searchDuration: 1,
    baseSuccessChance: 100,
    narrativeTriggerOnSuccess: 'discoveredOil',
    experienceValue: 2,
  },
  {
    name: "plastic",
    requiredLevel: 7,
    searchDuration: 10,
    baseSuccessChance: 80,
    narrativeTriggerOnSuccess: 'discoveredPlastic',
    experienceValue: 4,
  },
  {
    name: "silicon",
    requiredLevel: 10,
    searchDuration: 30,
    baseSuccessChance: 50,
    narrativeTriggerOnSuccess: 'discoveredSilicon',
    experienceValue: 10,
  }
] as const;
