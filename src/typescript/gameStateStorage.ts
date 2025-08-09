import { reactive } from 'vue'

export interface Skill {
    level: number,
    experience: number,
    targetExperience: number,
};

interface NarrativeTriggers {
    hasMined: boolean,
    hasBuiltAutoMiner: boolean,
    hasRefinedOre: boolean,
    hasLeveledMining: boolean,

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
        autoMiner: 0,
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
        hasMined: false,
        hasLeveledMining: false,
        hasRefinedOre: false,
        hasBuiltAutoMiner: false,
    },
}

// Making for easier debugging --------
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const global: any = globalThis
global.gameStateStorageObject = gameStateStorageObject;
// -----------

export const gameStateStorage = reactive(gameStateStorageObject)
