import { gameStateStorage } from "./gameStateStorage"
import type { ValidSkills, NarrativeTrigger } from "./gameTypes"
import { levelToNarrativeTriggerBreakpoints } from "./levelToNarrativeTriggerBreakpoints";
export const earnExperienceInSkill = (relevantSkill: ValidSkills, experienceAmount: number = 1) => {
    gameStateStorage.skills[relevantSkill].experience+= experienceAmount;
    if (gameStateStorage.skills[relevantSkill].experience >= gameStateStorage.skills[relevantSkill].targetExperience) {
        levelUpSkill(relevantSkill);
    }
}

const levelUpSkill = (relevantSkill: ValidSkills) => {
        gameStateStorage.skills[relevantSkill].experience = 0;
        gameStateStorage.skills[relevantSkill].level++;
        const newLevel = gameStateStorage.skills[relevantSkill].level;
        // here! how do we make this more generic?? - maybe we have maps for levels and breakpoints?
        // if(relevantSkill === 'mining' && newLevel === 1){
        //     activateNarrativeTrigger('hasUnlockedGoldMining')
        // } else if (relevantSkill === 'mining' && newLevel === 3){
        //     // here! this should unlock the new resource - gold
        //     // activateNarrativeTrigger('hasUnlockedGoldMining')
        // }
        if(levelToNarrativeTriggerBreakpoints[relevantSkill]?.[newLevel]){
            
        }
        
        // currently increasing by 15%
        gameStateStorage.skills[relevantSkill].targetExperience = Math.trunc(gameStateStorage.skills[relevantSkill].targetExperience * 1.15)
}

export const activateNarrativeTrigger = (narrativeTrigger: NarrativeTrigger) => {
    if (!gameStateStorage.narrativeTriggersArray.includes(narrativeTrigger)){
        gameStateStorage.narrativeTriggersArray.push(narrativeTrigger)
    }
}