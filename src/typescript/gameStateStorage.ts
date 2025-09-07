const isDevTesting = true // MUST BE SET HERE, ISN'T REACTIVE

import { reactive } from 'vue';
import type { ValidResources, ValidSkills } from './gameTypes';
import { automatonsData } from './gameConstants/automatonsData';
import { narrativeTriggersToText } from './gameConstants/narrativeTriggersToText';

export interface Skill {
    level: number,
    experience: number,
    targetExperience: number,
};

interface Upgrade {
    level: number,
    price: number,
    resourceType: ValidResources,
    requiredLevel?: {
        skill: ValidSkills | 'total',
        skillLevel: number,
    },
}

export interface StateStorageObject {
    isDevTesting: boolean,
    automatons: Record<keyof typeof automatonsData, number>,
    resources: {
        ore: number,
        steel: number,
        gold: number,
    },
    skills: {
        mining: Skill,
        robotics: Skill,
        trading: Skill,
    }
    upgrades: {
        pickaxe: Upgrade,
        neuronUplink: Upgrade,
    },
    neuronUplink: {
        isPurchased: boolean,
        selectedSkill: ValidSkills | null,
        experienceIncrease: number,
    }
    refineryState: {
        refineryUpgrades: Array<string>,
        oreInput: number,
        steelOutput: number,
    },

    unlockedSchematics: Array<string>,
    narrativeTriggersArray: Array<keyof typeof narrativeTriggersToText>,
}

// It might make more sense to just modify the state store when isDevTesting is True
const gameStateStorageObject: StateStorageObject = {
    isDevTesting,
    automatons: {
        autoMiner: 0,
        autoRefiner: 0,
        autoGoldMiner: 0,
        advancedAutoMiner: 0,
    },
    resources: {
        ore: 0,
        steel: 0,
        gold: 0    
    },
    skills: {
        mining: {
            level: 0,
            experience: 0,
            targetExperience: 20,
        },
        robotics: {
            level: 0,
            experience: 0,
            targetExperience: 20,
        },
        trading: {
            level: 0,
            experience: 0,
            targetExperience: 20,
        }
    },
    upgrades: {
        pickaxe: {
            level: 1,
            price: 10,
            resourceType: 'gold',
            requiredLevel: {
                skill: 'mining',
                skillLevel: 3,
            }
        },
        neuronUplink: {
            level: 1,
            price: 100,
            resourceType: 'gold',
            requiredLevel: {
                skill: 'total',
                skillLevel: 13,
            }
        },
    },
    neuronUplink: {
        isPurchased: false,
        selectedSkill: null,
        experienceIncrease: 0.5,
    },
    refineryState: {
        refineryUpgrades: [],
        oreInput: 10,
        steelOutput: 1,
    },
    unlockedSchematics: [],
    narrativeTriggersArray: ['gameStart'],
}

const TESTgameStateStorageObject: StateStorageObject = {
    isDevTesting,
    automatons: {
        autoMiner: 1,
        autoRefiner: 1,
        autoGoldMiner: 1,
        advancedAutoMiner: 1,
    },
    resources: {
        ore: 1000, 
        steel: 1000, 
        gold: 1000, 
    },
    skills: {
        mining: {
            level: 3,
            experience: 0,
            targetExperience: 29,
        },
        robotics: {
            level: 3,
            experience: 0,
            targetExperience: 29,
        },
        trading: {
            level: 3,
            experience: 0,
            targetExperience: 29,
        }
    },
    upgrades: {
        pickaxe: {
            level: 1,
            price: 10,
            resourceType: 'gold',
            requiredLevel: {
                skill: 'mining',
                skillLevel: 3,
            }
        },
        neuronUplink: {
            level: 1,
            price: 100,
            resourceType: 'gold',
            requiredLevel: {
                skill: 'total',
                skillLevel: 13,
            }
        },
    },
    neuronUplink: {
        isPurchased: false,
        selectedSkill: null,
        experienceIncrease: 0.5,
    },
    refineryState: {
        refineryUpgrades: [],
        oreInput: 10,
        steelOutput: 1,
    },
    unlockedSchematics: [],
    narrativeTriggersArray: ['gameStart'],
}

export const gameStateStorage = reactive(isDevTesting ? TESTgameStateStorageObject : gameStateStorageObject)

// ---------- Exposing the state for easier debugging --------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global: any = globalThis
global.gameStateStorage = gameStateStorage;
// -----------

