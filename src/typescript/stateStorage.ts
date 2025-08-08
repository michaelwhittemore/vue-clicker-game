import { reactive } from 'vue'

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
    },
    skills: {
        mining: Skill,
        electronics: Skill,
        trading: Skill,
    }
    goods?: object,
    technologies?: object,
}

const stateStorageObject: StateStorageObject = {
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
}

window.stateStorageObject = stateStorageObject;

export const stateStorage = reactive(stateStorageObject)
