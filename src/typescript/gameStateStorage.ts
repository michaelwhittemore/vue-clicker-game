const isDevTesting = true // MUST BE SET HERE, ISN'T REACTIVE

import { reactive } from 'vue';
import type { ValidResources, ValidSkills } from './gameTypes';
import { automatonsData } from './gameConstants/automatonsData';
import { narrativeTriggersToText } from './gameConstants/narrativeTriggersToText';
import { recursiveObjectAssign } from './gameHelpers';
import { shipRepairsData} from './gameConstants/shipRepairsData';

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
    automatons: Record<keyof typeof automatonsData, number>,
    // TODO - for both resources and skills, figure out how to specify keys for TS
    resources: {
        ore: number,
        steel: number,
        gold: number,
        silicon?: number,
        oil?: number,
        plastic?: number,
    },
    skills: {
        mining: Skill,
        robotics: Skill,
        trading: Skill,
        manufacturing: Skill,
        prospecting: Skill,
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
    prospectingTool: {
        isPurchased: boolean,
    },
    goldVeinInfo: {
      isActive: boolean,
      amountLeft: number,
    },
    unlockedSchematics: Array<string>,
    ship: {
        isPurchased: boolean,
        requiredRepairs: object,
        isFixed: boolean,
        completedRepairs: Array<string>
    }
    narrativeTriggersArray: Array<keyof typeof narrativeTriggersToText>,
}

const baseTargetExperience = 20;
const experienceMultiplierPerLevel = 1.15;
const initSkill = () => {
    const skill: Skill = {
        level: 0,
        experience: 0,
        get targetExperience(){
            // currently increases the target by 15% every new level
            return Math.trunc((experienceMultiplierPerLevel ** this.level) * baseTargetExperience)
        },
    }
    return skill;
}

const gameStateStorageObject: StateStorageObject = {
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
        mining: initSkill(),
        robotics: initSkill(),
        trading: initSkill(),
        manufacturing: initSkill(),
        prospecting: initSkill(),
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
        oreInput: 9,
        steelOutput: 1,
    },
    prospectingTool: {
        isPurchased: false,
    },
    goldVeinInfo: {
      isActive: false,
      amountLeft: 0,
    },
    unlockedSchematics: [],
    ship: {
        isPurchased: false,
        get isFixed(){
            return this.completedRepairs.length === Object.keys(shipRepairsData).length
        },
        completedRepairs: [],
        requiredRepairs: structuredClone(shipRepairsData),
    },
    narrativeTriggersArray: ['gameStart'],
}

const TESTgameStateStorageObject = {
    automatons: {
        autoMiner: 2,
        autoRefiner: 2,
        autoGoldMiner: 2,
        advancedAutoMiner: 2,
    },
    resources: {
        ore: 10000,
        steel: 10000,
        gold: 10000,
    },
    skills: {
        mining: {
            level: 4,
        },
        robotics: {
            level: 4,
        },
        trading: {
            level: 4,
        },
        manufacturing: {
            level: 2,
            experience: 10,
        }
    },
    prospectingTool: {
        isPurchased: true,
    },
}

if (isDevTesting) {
    console.warn('Using test values, this should not occur in production')
    recursiveObjectAssign(gameStateStorageObject, TESTgameStateStorageObject)
}

export const gameStateStorage = reactive(gameStateStorageObject)

// ---------- Exposing the state for easier debugging --------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global: any = globalThis
global.gameStateStorage = gameStateStorage;
// -----------

