// Maybe add narrative triggers to all of these?
import type { ValidNarrativeTrigger } from "../gameTypes"
export interface RepairInformation {
    displayText: string,
    amountNeeded: number,
    amountBuilt: number,
    steelCost: number,
    narrativeTrigger: ValidNarrativeTrigger,
}
// When displaying should have a x/amount i.e. 0/4
// Eventually we maybe have multiple resources needed? 
export const shipRepairsData: Record<string, RepairInformation> = {
    'thruster': {
        displayText: 'Repair Thruster',
        amountNeeded: 4,
        amountBuilt: 0,
        steelCost: 200,
        narrativeTrigger: 'hasRepairedThrusters',
    },
    'landingGear': {
        displayText: 'Repair Landing Gear',
        amountNeeded: 1,
        amountBuilt: 0,
        steelCost: 150,
        narrativeTrigger: 'hasRepairedLandingGear',
    },
    'hull': {
        displayText: 'Patch the hull',
        amountNeeded: 1,
        amountBuilt: 0,
        steelCost: 700,
        narrativeTrigger: 'hasRepairedHull',
    },
    'cockpit': {
        displayText: 'Fix Flight Controls',
        amountNeeded: 1,
        amountBuilt: 0,
        steelCost: 500,
        narrativeTrigger: 'hasRepairedCockpit',
    },
    'wings': {
        displayText: 'Repair Wings',
        amountNeeded: 2,
        amountBuilt: 0,
        steelCost: 300,
        narrativeTrigger: 'hasRepairedWings',
    },
} as const