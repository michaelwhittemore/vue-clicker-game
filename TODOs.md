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
    13. ~~ Need to have a chance to generate gold when mining with level > 1~~
    14. ~~Move the narrative text to its own component. Have some kind of map for events to text?~~
    13. ~~Pickaxe upgrade - maybe add a shop? - updates will require a new resource, maybe gold? - traveling merchant, will need to add narrative text for their arrival and also a ~~
    14.  ~~Let's make a gold mining robot. Also ~~
        - ~~What triggers the ability to build the gold mining robot? - electronics three~~
        - ~~May want to have the gold miner work on a slower loop?~~
    15. **Here!**  maybe you can sell steel to the merchant??
        - Attach a button to the shop
        - Should display is tied to steel
        - Should be a pretty disadvantageous rate
    * BUG!!! Mining level not affecting the pickaxe purchase
    16. Refactor locations (the primary reason is that we don't want to have the app track all the buttons)
    14. Refactor generate resources to use composable (instead of weird props and conditionals
    see https://vuejs.org/guide/reusability/composables#composables)
    10. Shop - will need to have some kind of good to sell (maybe you mine gold??)
    - ----- What resources do I want to add? I said gold, maybe some more exciting electronic components.
    12. Perhaps the ability to build auto builders??
    11. Eventually we will need travel. This will probably take the form of grouping locations into another container/wrapper that gets replaced. Should make ships available from the shop
        - will need a cargo system of some kind?
    12. Make things like exp collapsible 
    12. Add saving - pretty sure this is just loading in gameStateStorage from local storage (will probably need the logic to be within `gameStateStorage.ts` as that's what exports the ref)
    

# Style Todos
* Need a more distinctive font 
* Add some kind of animation when mining or building? maybe a little `+1 ore` popup? Will need to do some research
* Look at a mobile game or civ or something for UI inspiration for resource bar
* maybe switch the narrative back to the top and just hard code the height? - need to fix the scrolling first I think
* I should give the narrative area scrolling and a maximum height - I will also want it to scroll down - also some spacing between text
* have some sort of border that demands attention when a new text is added? maybe it's highlighted for a few seconds? (like for the narrative element)

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
 

# Stretch Goals
* achievements
* saving
* consider https://pinia.vuejs.org/ pinia for state management
* Eventually locations will need to be generated with Vue components
