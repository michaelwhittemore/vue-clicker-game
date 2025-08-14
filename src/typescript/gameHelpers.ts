import { gameStateStorage } from "./gameStateStorage"
import type { ValidSkills } from "./gameTypes"
export const earnExperienceInSkill = (relevantSkill: ValidSkills, experienceAmount: number = 1) => {
    gameStateStorage.skills[relevantSkill].experience+= experienceAmount;
    if (gameStateStorage.skills[relevantSkill].experience >= gameStateStorage.skills[relevantSkill].targetExperience) {
        levelUpSkill(relevantSkill);
    }
}

const levelUpSkill = (relevantSkill: ValidSkills) => {
        gameStateStorage.skills[relevantSkill].experience = 0;
        gameStateStorage.skills[relevantSkill].level++;
        // here! how do we make this more generic?? - can include different break points 
        // let's just use if statements for the moment
        if (!gameStateStorage.narrativeTriggersArray.includes('hasLeveledMining')) {
            gameStateStorage.narrativeTriggersArray.push('hasLeveledMining')
        }
        // currently increasing by 15%
        gameStateStorage.skills[relevantSkill].targetExperience = Math.trunc(gameStateStorage.skills[relevantSkill].targetExperience * 1.15)
}

export const activateNarrativeTrigger = () => {

}