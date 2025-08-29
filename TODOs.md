# Todos

# Things to work on immediately 
* Current Tasks: 
    1. ~~Shop selling resources~~
        - ~~I guess we should start by moving all the slots into the shop component~~
        * ~~I've added selling steel, now let's sell Ore~~
        * ~~Ore will be at a worse rate~~
        * ~~Both will need to be affected by trading and also have popup text~~
        * ~~Still need to add a narrative trigger to trading level~~
    2. ~~popUpText animation~~
    3. ~~Add the highlight to recent entry in narrative log~~
    4. ~~Need to psychically allow the store to scroll. ~~
        - may need to resize
        - on mobile maybe 2x2? Also less space in between
        - may need to modify css for `locationsHolder`
    5. Add an upgrades section to the store, possibly also make somewhere where I can build the upgrades (i.e. schematic vs upgrade)
        * maybe break the store into ITEMS and schematics??
            - use `:is` https://vuejs.org/guide/essentials/component-basics#dynamic-components
            - Will need a button to swicth between the 2
        * Add the ability to buy schematic for gold (which trigger both narrative and buttons to appear)
        - Let's start with an upgrade
        - also an advanced ore miner (maybe three at a time?)
    6. a new resource (just pick something, maybe silica or clay? can be pretty random), unobtanium, living steel, sentient calcium - in general humorous resources are good
    6. I should have a more efficient refiner as an upgrade
        * Two different parts to this
            - less ore
            - better output
    7. Now that I have the ship you should be able to repair it
        - will need to add the ship to game storage
        - repair should cost a hefty amount of steel
        - 
# Immediate future tasks
* Refactor generate resources to use composable (instead of weird props and conditionals
see https://vuejs.org/guide/reusability/composables#composables)
* Might be worth some sort of game flow document (i.e. the resources and expected order of accrual) and what unlocks what - i keep forgetting two refiners for the shop
* Perhaps the ability to build auto builders??
* Eventually we will need travel. This will probably take the form of grouping locations into another container/wrapper that gets replaced. Should make ships available from the shop
    - will need a cargo system of some kind? (only if I end up doing trading)
    - I think we use the `is` system of Vue
*  Make things like exp collapsible 
* Add saving - pretty sure this is just loading in gameStateStorage from local storage (will probably need the logic to be within `gameStateStorage.ts` as that's what exports the ref)
* Some sort of neural uplink to gain passive xp (should be able to switch between skills)
* add the ability to prospect to find new minerals??
    

# Style Todos
* Need a more distinctive font 
* The buttons look ugly and like forms, should at the very least change the color and maybe center them?
* ~~Add some kind of animation when mining or building? maybe a little `+1 ore` popup? Will need to do some research~~
* Look at a mobile game or civ or something for UI inspiration for resource bar
* ~~maybe switch the narrative back to the top and just hard code the height? - need to fix the scrolling first I think~~
* I should give the narrative area scrolling and a maximum height - I will also want it to scroll down - also some spacing between text
* have some sort of border that demands attention when a new text is added? maybe it's highlighted for a few seconds? (like for the narrative element)
* Should I try with randomness in location - like a 10px difference?

# General Notes
* Will need to mention this was to learn vue and to refresh my typescript knowledge 
    - mention cookie clicker explicitly and the incremental genre 
* `env.d.ts` need to make sure all my types are here
    - if not `env` then at least some kind of typescript definition files - https://www.typescriptlang.org/docs/handbook/2/type-declarations.html 
* look into a typescript guide, feel like I'm missing some stuff
* typescript eslint
* I should read more about the virtual DOM https://vuejs.org/guide/extras/rendering-mechanism 
* Looks like maybe .d.ts is only for JS files?? 
* Should we have a generic for buttons? (both buy and generate)
* Issue with `has no default export.` seems like possibly due to script missing the `setup` tag?
    - Yep! `setup` fixes it!
* `String` & `string` are NOT the same, see https://stackoverflow.com/questions/47484525/operator-cannot-be-applied-to-types-number-and-1\
* DO NOT use prop destructing. It says it was fixed in 3.5, but it caused me a ton of headaches https://vuejs.org/guide/components/props#reactive-props-destructure
// const badArray: Array<string> = ['a', 'b', 1]
// const anotherBadArray: Array<number> = [1,2, 'as'] 
* Should read up on typescript best practices
* read about css animations

# Rebalancing notes
* maybe have gold come in at level 2 or 3?
* should be viable to sell, right now the rate seems punishing
* gold should be rarer
* in general, remember that this should be a long term game

# Useful Vue doc links
* https://vuejs.org/guide/introduction.html
* https://vuejs.org/examples/#hello-world
* https://vuejs.org/tutorial/#step-1https://vuejs.org/tutorial/#step-1
* https://vuejs.org/guide/scaling-up/state-management
* https://vuejs.org/guide/essentials/list 
* https://stackoverflow.com/questions/42872002/in-vue-js-component-how-to-use-props-in-css, https://stackoverflow.com/questions/69102748/vue-3-get-props-in-style
* https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
* https://vuejs.org/guide/typescript/overview
* https://vuejs.org/guide/reusability/composables#composables
* https://blog.logrocket.com/using-event-bus-vue-js-pass-data-between-components/
* https://vuejs.org/guide/extras/animation
* https://vuejs.org/guide/essentials/component-basics#dynamic-components specifically using tabs and `is`

# Stretch Goals
* achievements
* saving
* consider https://pinia.vuejs.org/ pinia for state management
* Eventually locations will need to be generated with Vue components
