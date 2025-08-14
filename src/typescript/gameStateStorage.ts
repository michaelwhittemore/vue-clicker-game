import { reactive } from 'vue';
import type { NarrativeTrigger } from './gameTypes';

export interface Skill {
    level: number,
    experience: number,
    targetExperience: number,
};

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
        electronics: Skill,
        trading: Skill,
    }
    goods?: object,
    technologies?: object,
    narrativeTriggersArray: NarrativeTrigger[],
}

const gameStateStorageObject: StateStorageObject = {
    automatons: {
        autoMiner: 0,
        autoRefiner: 0,
    },
    resources: {
        ore: 0,
        steel: 30,
        gold: 0,
    },
    skills: {
        mining: {
            level: 0,
            experience: 0,
            targetExperience: 20,
        },
        electronics: {
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
