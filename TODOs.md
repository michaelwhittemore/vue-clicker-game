# Todos

# Things to work on immediately 
* here! 
    1.  ~~Let's make the resource display use data from the storageState~~
    2. ~~Let's implement the ability to buy auto-clickers~~
    3. ~~Let's remove `DisplayProps` and `ClickButton`~~
    4. ~~Need to add the area (as in locations). Mine, refinery, lab~~
    5. ~~Refine ore to steel button - should this be different from generate resource button?~~
    7.  ~~AutoRefiner buy button doesn't do anything right now ~~
    10.  ~~Add an experience bar (robotics skill allows you to build an autoRefiner)~~
    11. ~~Need to programmatically generate the exp components (You shouldn't show robotics/robotics until we've already built a robot)~~
        - Hide the auto refinery behind level
            - Within buy automaton we need a computed property that we can then tie to `v-if`
            - So why is robotics not properly increasing?
            - Will also need to add narrative text to this (when we level robotics)
            - Let's create a `levelUp` helper
    13. Need to have a chance to generate gold when mining with level > 1
        - this should be within generateResource
    12. ~~Move the narrative text to its own component. Have some kind of map for events to text?~~
        - Need to add the scroll
        - Need to have the triggers
        - ~~Need to fix ordering issue.~~
        - Need to fix how hard coded the triggers are
    13. **HERE!**  Maybe you have a random chance to get gold? Should scale with mining level?
        - Let's add some narrative stuff for being able to get gold
        - Maybe level 1? 

    * Might be worth refactoring some component logic into exported functions?
    13. Pickaxe upgrade - maybe add a shop? - updates will require a new resource, maybe gold? - traveling merchant
    10. Shop - will need to have some kind of good to sell (maybe you mine gold??)
    - ----- What resources do I want to add? I said gold, maybe some more exciting electronic components.
    11. Eventually we will need travel. This will probably take the form of grouping locations into another container/wrapper that gets replaced
    12. Make things like exp collapsible 
    8. Need to make the miners slower (need to have some kind of counter in the game loop so that it only fires every few game ticks)

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
* `String` & `string` are NOT the same, see https://stackoverflow.com/questions/47484525/operator-cannot-be-applied-to-types-number-and-1\
* DO NOT use prop destructing. It says it was fixed in 3.5, but it caused me a ton of headaches https://vuejs.org/guide/components/props#reactive-props-destructure
// const badArray: Array<string> = ['a', 'b', 1]
// const anotherBadArray: Array<number> = [1,2, 'as'] 
* Should read up on typescript best practices

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