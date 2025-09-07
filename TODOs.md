# Todos

# Things to work on immediately 
* Current Tasks: 

    2. ~~Move the test data object so that it just modifies the existing one~~
    3. Refactor so that all components are in relevant location folders 
    4. Slight rebalancing for early game - decrease price to build automatons and refine ore?
    6. a new resource (just pick something, maybe silica or clay? can be pretty random), unobtanium, living steel, sentient calcium, oil, coal - in general humorous resources are good
        - maybe we start being able to mine the second resource at level 2?
    7. ~~Let's do the neuron uplink! ~~

    7. Now that I have the ship you should be able to repair it
        - Ship might need its own location tab
        - will need to add the ship to game storage
        - repair should cost a hefty amount of steel
    8. We should add a class to replace 'button', or style the buttons a lot more?
    9. ~~Add a the map of key names to readable names (i.e. `autoGoldMiner` -> `Automatic Gold Miner`)~~
    10. Make the locations more mobile responsive 
        - may need to resize
        - on mobile maybe 2x2? Also less space in between
        - may need to modify css for `locationsHolder`
    11. Allow the refinery to be upgraded multiple times
    12. For some automatons increase the price after certain intervals (i.e. after 10 miners)
        - Call it something like ('signal interference,') add a tech to remove the associated cost - call the tech something like 'improvedAutoPath'?
        - Also make the automatons cheaper by default
    13. Maybe add a UI to the current resources to show the per second rate??
    14. Add narrative to the refinery upgrades ( make it clear that they don't apply bots, add an upgrade so that they do)
    15. Add a stupidly expensive, "gold statue"
    16. Add a manufactory. I guess you buy construction materials from the shop and then can restore it
        - This should have it's own component with a changing color scheme depending on whether it's fixed or not
        - manufacturing should add a new skill
        - can sell at much better rates, but also create circuits or other useful building materials
        - Maybe we can then add other buildings? Attract other characters to the town?? (To fit the vibes they could all be robots) 
            - maybe add a 'charisma' or 'charm' or 'social skills'
        - Maybe tourism? Need to balance industrial resource (like ore and steel) acquisition vs gold from a game balance perspective
        - Some buildings apply temporary boosts - or maybe can build consumables to do the same
    17. At level 20 mining you should get a chance for double gold
    18. Maybe the narrative area eventually gets the split treatment for achievements? - like it shows the achievement tab? Name the primary narrative one as "journal"
        - maybe achievements are tied to certain amounts of automatons? getting 50, 100 ect... 
        - We will need point values for achievements

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
* It may be worth using https://stackoverflow.com/questions/45251664/derive-union-type-from-tuple-array-values and const assertions https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions in the place of my types file. This would allow me to use the array as a type
* maybe an `innovation` skill? Allows you to randomly unlock upgrades?

# Style Todos
* Need a more distinctive font 
* different color for buttons for upgrades, actions, building (especially on something like the refinery)
* The buttons look ugly and like forms, should at the very least change the color and maybe center them?
* ~~Add some kind of animation when mining or building? maybe a little `+1 ore` popup? Will need to do some research~~
* Look at a mobile game or civ or something for UI inspiration for resource bar
* ~~maybe switch the narrative back to the top and just hard code the height? - need to fix the scrolling first I think~~
* I should give the narrative area scrolling and a maximum height - I will also want it to scroll down - also some spacing between text
* have some sort of border that demands attention when a new text is added? maybe it's highlighted for a few seconds? (like for the narrative element)
* Should I try with randomness in location - like a 10px difference? (for animations)
* Maybe we have a notification badge when new schematics are available?

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
* I don't like that `targetExperience` is done this way, maybe use a getter instead?

# Rebalancing notes
* Maybe shop should appear after refining a certain amount of steel?
* maybe have gold come in at level 2 or 3?
* should be viable to sell, right now the rate seems punishing
* gold should be rarer
* in general, remember that this should be a long term game
* maybe pickaxe higher level requirements?

# Useful Vue doc links
* https://vuejs.org/guide/extras/reactivity-in-depth.html Seems really useful
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
