import { reactive } from 'vue'

export interface Skill {
    level: number,
    experience: number,
    targetExperience: number,
};

interface NarrativeTriggers {
    hasMined: boolean,
    hasBuiltAutoMiner: boolean,
    hasLeveledMining: boolean,
    hasRefinedOre: boolean,
};

export interface StateStorageObject {
    automatons: {
        autoMiner: number,
        autoRefiner: number,
    },
    resources: {
        ore: number,
        steel: number,
    },
    skills: {
        mining: Skill,
        electronics: Skill,
        trading: Skill,
    }
    goods?: object,
    technologies?: object,
    narrativeTriggers: NarrativeTriggers,
}

const gameStateStorageObject: StateStorageObject = {
    automatons: {
        autoMiner: 1,
        autoRefiner: 0,
    },
    resources: {
        ore: 0,
        steel: 30,
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
    narrativeTriggers: {
        hasMined: true,
        hasBuiltAutoMiner: true,
        hasLeveledMining: false,
        hasRefinedOre: true,
    },
}

// Making for easier debugging --------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global: any = globalThis
global.gameStateStorageObject = gameStateStorageObject;
// -----------

export const gameStateStorage = reactive(gameStateStorageObject)
