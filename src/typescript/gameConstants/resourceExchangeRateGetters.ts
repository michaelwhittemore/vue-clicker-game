
const getOreRateFromTradingLevel = (level: number) => {
    // looks like `if` statements are more efficient than switch statements, 
    // see https://stackoverflow.com/questions/5619832/switch-on-ranges-of-integers-in-javascript
    if (level < 2){
        return 300
    } else if (level < 5){
        return 250
    } else {
        return 210
    }
}

const getSteelRateFromTradingLevel = (level: number) => {
    if (level < 1){
        return 27
    } else if (level < 3){
        return 22
    } else if (level < 5){
        return 20
    } else {
        return 18
    }
}

export const tradingLevelsToResourceMap = {
    ore: getOreRateFromTradingLevel,
    steel: getSteelRateFromTradingLevel,
}