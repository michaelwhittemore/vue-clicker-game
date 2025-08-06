import { reactive } from 'vue'


export interface StateStorageObject {
    automatons: {
        autoMiners: number,
        autoRefiners: number,
    },
    resources: {
        ore: number,
        steel: number,
    },
    goods?: object,
    technologies?: object,
}

const stateStorageObject: StateStorageObject = {
    automatons: { 
        autoMiners: 1,
        autoRefiners: 0,
    },
    resources: {
        ore: 0,
        steel: 0,
    },
    goods: {},
    technologies: {},
}

export const stateStorage = reactive(stateStorageObject)
