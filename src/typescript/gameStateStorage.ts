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
        skill: ValidSkills
        skillLevel: number,
    },
    // may also need a resource price
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
        pickaxe: Upgrade

    },
    neuronUplink: {
        isPurchased: boolean,
        selectedSkill: ValidSkills | null,
    }// It's possible this should be an outer property? 
    refineryState: {
        refineryUpgrades: Array<string>,
        oreInput: number,
        steelOutput: number,
    },

    unlockedSchematics: Array<string>,
    narrativeTriggersArray: Array<keyof typeof narrativeTriggersToText>,
}

const isDevTesting = true // MUST BE SET HERE, ISN'T REACTIVE
const gameStateStorageObject: StateStorageObject = {
    isDevTesting,
    automatons: {
        autoMiner: 0,
        autoRefiner: 0,
        autoGoldMiner: 0,
        advancedAutoMiner: 0,
    },
    resources: {
        ore: (isDevTesting ? 1000 : 0),
        steel: (isDevTesting ? 1000 : 0),
        gold: (isDevTesting ? 100 : 0),
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
    },
    neuronUplink: {
        isPurchased: false,
        selectedSkill: null,
    },
    refineryState: {
        refineryUpgrades: [],
        oreInput: 10,
        steelOutput: 1,
    },
    unlockedSchematics: [],
    narrativeTriggersArray: ['gameStart'],
}

export const gameStateStorage = reactive(gameStateStorageObject)

// ---------- Exposing the state for easier debugging --------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global: any = globalThis
global.gameStateStorage = gameStateStorage;
// -----------
