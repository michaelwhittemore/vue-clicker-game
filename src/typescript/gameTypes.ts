// Might want to rename this file 
export type ValidAutomatons = 'autoMiner' | 'autoRefiner' | 'autoGoldMiner';
export type ValidResources = 'ore' | 'steel' | 'gold';
export type ValidSkills = 'mining' | 'robotics' | 'trading';
// Maybe `NarrativeTrigger` should live in the narrative trigger file?
export type NarrativeTrigger = 'gameStart' | 'hasMined' | 'hasBuiltAutoMiner' | 'hasRefinedOre' | 'hasUnlockedGoldMining' 
| 'hasBuiltAutoRefiner' | 'hasUnlockedPickaxeUpgrade1' | 'hasUnlockedAutoRefiner' | 'tradingUnlock1' | 
'hasMinedGold' | 'hasUnlockedShop' | 'hasUpgradedPickaxe' | 'hasUnlockedAutoGoldMiner' | 'hasBuiltAutoGoldMiner';
