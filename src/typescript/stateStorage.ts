import { reactive } from 'vue'

// Looks like maybe .d.ts is only for JS files??
const stateStorageObject = {
    // I Think we will want a currencies object and a buildings (that's what we will call it for now)
    buildings: { 
        autoClickers: 0 
    },
    resources: {
        ore: 0,
        steel: 0,
    },
    goods: [],
    technologies: [],
}
console.log('stateStorageObject created')
console.log(stateStorageObject)

export const stateStorage = reactive(stateStorageObject)