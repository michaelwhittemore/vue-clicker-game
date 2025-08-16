import { reactive } from 'vue';
import type { NarrativeTrigger } from './gameTypes';

export interface Skill {
    level: number,
    experience: number,
    targetExperience: number,
};

interface Upgrade {
    level: number,
    price: number,
    // may also need a resource price
}

export interface StateStorageObject {
    automatons: {
        autoMiner: number,
        autoRefiner: number,
    },
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
    goods?: object,
    technologies?: object,
    upgrades: {
        pickaxe: Upgrade
    }, 
    narrativeTriggersArray: NarrativeTrigger[],
}

const gameStateStorageObject: StateStorageObject = {
    automatons: {
        autoMiner: 0,
        autoRefiner: 0,
    },
    resources: {
        // these should be zero, but this makes testing easier
        ore: 0,
        steel: 100,
        gold: 10,
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
        }
    },
    goods: {},
    technologies: {},
    narrativeTriggersArray: [],
}

export const gameStateStorage = reactive(gameStateStorageObject)

// ---------- Exposing the state for easier debugging --------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global: any = globalThis
global.gameStateStorage = gameStateStorage;
// -----------
