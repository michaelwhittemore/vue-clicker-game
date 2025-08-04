import { reactive } from 'vue'

// Do we need to specify the values here or in the .d.ts file?
export const stateStorage = reactive({
    count: 0,
    currency: 0,
})