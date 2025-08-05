import { reactive } from 'vue'


export interface StateStorageObject {
    automatons: {
        autoClickers: number,
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
        autoClickers: 0, 
    },
    resources: {
        ore: 0,
        steel: 0,
    },
    goods: {},
    technologies: {},
}

export const stateStorage = reactive(stateStorageObject)
