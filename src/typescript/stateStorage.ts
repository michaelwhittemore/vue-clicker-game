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
        autoRefiners: 1,
    },
    resources: {
        ore: 105,
        steel: 100,
    },
    skills: {

    },
    goods: {},
    technologies: {},
}

export const stateStorage = reactive(stateStorageObject)
