// It's possible these might be more accurately called 'utilities'
import { gameStateStorage } from "./gameStateStorage"
import type { ValidSkills, ValidResources } from "./gameTypes"
import { narrativeTriggersToText } from "./gameConstants/narrativeTriggersToText";
import { levelToNarrativeTriggerBreakpoints } from "./gameConstants/levelToNarrativeTriggerBreakpoints";
export const earnExperienceInSkill = (relevantSkill: ValidSkills, experienceAmount: number = 1) => {
  gameStateStorage.skills[relevantSkill].experience += experienceAmount;
  if (gameStateStorage.skills[relevantSkill].experience >= gameStateStorage.skills[relevantSkill].targetExperience) {
    levelUpSkill(relevantSkill);
  }
}

const levelUpSkill = (relevantSkill: ValidSkills) => {
  gameStateStorage.skills[relevantSkill].experience -= gameStateStorage.skills[relevantSkill].targetExperience;
  gameStateStorage.skills[relevantSkill].level++;
  const newLevel = gameStateStorage.skills[relevantSkill].level;

  if (levelToNarrativeTriggerBreakpoints[relevantSkill]?.[newLevel]) {
    activateNarrativeTrigger(levelToNarrativeTriggerBreakpoints[relevantSkill][newLevel])
  }
}

export const activateNarrativeTrigger = (narrativeTrigger: keyof typeof narrativeTriggersToText) => {
  if (!gameStateStorage.narrativeTriggersArray.includes(narrativeTrigger)) {
    gameStateStorage.narrativeTriggersArray.push(narrativeTrigger)
  }
}

export const getTotalLevel = () => {
  let total = 0;
  const skillKeys = Object.keys(gameStateStorage.skills) as Array<keyof typeof gameStateStorage.skills>;
  for (const skill of skillKeys) {
    total += gameStateStorage.skills[skill].level;
  }
  return total;
}

export const recursiveObjectAssign = (targetObject: object, sourceObject: object) => {
  // iterate over all properties for each that is an object recursively call this function
  // Not sure if behavior might be incorrect with an array of objects.
  (Object.keys(sourceObject) as Array<keyof typeof sourceObject>).forEach(key => {
    if (typeof sourceObject[key] !== 'object') {
      targetObject[key] = sourceObject[key];
    } else {
      recursiveObjectAssign(targetObject[key], sourceObject[key])
    }
  })
}


export const calculateResourceIncomeFactory = (resourceType: ValidResources) => {
  // TODO - in the future the automatons may become upgradeable
  switch (resourceType) {
    case 'ore':
      return () => {
        return (gameStateStorage.automatons.autoMiner * 1) +
          (gameStateStorage.automatons.advancedAutoMiner * 5)
      }
    case 'gold':
      return () => {
        return (gameStateStorage.automatons.autoGoldMiner * 0.5)
      }
    case 'steel':
      return () => {
        return (gameStateStorage.automatons.autoRefiner * 1)
      }
    case 'oil':
      return () => 0; // No automatons at the moment
    case 'plastic':
      return () => 0; // No automatons at the moment
    case 'silicon':
      return () => 0; // No automatons at the moment
    default:
      console.error(`invalid resource type ${resourceType} in getResourceIncomeFactory`)
      break;
  }

}
