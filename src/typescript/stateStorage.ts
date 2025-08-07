import { reactive } from 'vue'

export interface Skill {
    level: number,
    experience: number
};
export interface StateStorageObject {
    automatons: {
        autoMiners: number,
        autoRefiners: number,
    },
    resources: {
        ore: number,
        steel: number,
    },
    skills: {
        mining?: Skill,
        electronics?: Skill,
    }
    goods?: object,
    technologies?: object,
}

const stateStorageObject: StateStorageObject = {
    automatons: {
        autoMiners: 0,
        autoRefiners: 0,
    },
    resources: {
        ore: 0,
        steel: 0,
    },
    skills: {
        mining: {
            level: 0,
            experience: 0,
        }
    },
    goods: {},
    technologies: {},
}

export const stateStorage = reactive(stateStorageObject)
