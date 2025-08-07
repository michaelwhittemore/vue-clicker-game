# Todos

# Things to work on immediately 
* here! 
    1.  ~~Let's make the resource display use data from the storageState~~
    2. ~~Let's implement the ability to buy auto-clickers~~
    3. ~~Let's remove `DisplayProps` and `ClickButton`~~
    4. ~~Need to add the area (as in locations). Mine, refinery, lab~~
    5. ~~Refine ore to steel button - should this be different from generate resource button?~~
    6.  ~`Add the error when clicking on an invalid button (also maybe add a style)`~
    7.  ~~Add an auto-refiner ~~
        ~~- In general we need a type declaration for valid resource types~~
    8. Need to make the miners slower (need to have some kind of counter in the game loop so that it only fires every few game ticks)
        ~~- Need to do something about inconsistent `autoMiner` vs `autoMiner` casing~~
    9. Pickaxe upgrade
    10. **HERE!** Add an experience bar (robotics skill allows you to build an autoRefiner)
        - mining makes clicks better
        - add a section with a bar
    10. Shop - will need to have some kind of good to sell (maybe you mine gold??)
    11. Eventually we will need travel. This will probably take the form of grouping locations into another container/wrapper that gets replaced

# Style Todos
* Need a more distinctive font 
* Add some kind of animation when mining or building? maybe a little `+1 ore` popup? Will need to do some research
* Look at a mobile game or civ or something for UI inspiration for resource bar

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
* `String` & `string` are NOT the same, see https://stackoverflow.com/questions/47484525/operator-cannot-be-applied-to-types-number-and-1
// const badArray: Array<string> = ['a', 'b', 1]
// const anotherBadArray: Array<number> = [1,2, 'as'] 

# Useful Vue doc links
* https://vuejs.org/guide/introduction.html
* https://vuejs.org/examples/#hello-world
* https://vuejs.org/tutorial/#step-1https://vuejs.org/tutorial/#step-1
* https://vuejs.org/guide/scaling-up/state-management
* https://vuejs.org/guide/essentials/list 
* https://stackoverflow.com/questions/42872002/in-vue-js-component-how-to-use-props-in-css, https://stackoverflow.com/questions/69102748/vue-3-get-props-in-style
* https://vuejs.org/guide/typescript/composition-api.html#typing-component-props
* https://vuejs.org/guide/typescript/overview


# Stretch Goals
* achievements
* saving
* consider https://pinia.vuejs.org/ pinia for state management
* Add some flavor! Maybe some intro text at the very least?
* Eventually locations will need to be generated with Vue components
* basic pickaxe system (affects your basic clicker)