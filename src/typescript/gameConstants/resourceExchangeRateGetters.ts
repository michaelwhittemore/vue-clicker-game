
const getOreRateFromTradingLevel = (level: number) => {
    // looks like `if` statements are more efficient than switch statements, 
    // see https://stackoverflow.com/questions/5619832/switch-on-ranges-of-integers-in-javascript
    if (level < 2){
        return 350
    } else if (level < 5){
        return 250
    } else {
        return 210
    }
}

const getSteelRateFromTradingLevel = (level: number) => {
    if (level < 1){
        return 30
    } else if (level < 3){
        return 25
    } else if (level < 5){
        return 22
    } else {
        return 19
    }
}

export const tradingLevelsToResourceMap = {
    ore: getOreRateFromTradingLevel,
    steel: getSteelRateFromTradingLevel,
}