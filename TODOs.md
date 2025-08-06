# Todos

# Things to work on immediately 
* here! 
    1.  ~~Let's make the resource display use data from the storageState~~
    2. ~~Let's implement the ability to buy auto-clickers~~
    3. ~~Let's remove `DisplayProps` and `ClickButton`~~
    4. Need to add the area (as in locations). Mine, refinery, lab
        - https://stackoverflow.com/questions/42872002/in-vue-js-component-how-to-use-props-in-css, https://stackoverflow.com/questions/69102748/vue-3-get-props-in-style
        - Still need to style locations
        - Need to use binding for colors
        - Maybe we can have global list of color scheme class? And we can bind the class?
    5. **HERE!** Refine ore to steel button - should this be different from generate resource button?
        - Then will need to switch the price to steel
    6. Add the error when clicking on an invalid (also maybe add a style )
    7. Add an auto-refiner 
    8. Need to make the miners slower (need to have some kind of counter in the game loop so that it only fires every few game ticks)

# Style Todos
* Need a more distnitcive font 

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

// const badArray: Array<string> = ['a', 'b', 1]
// const anotherBadArray: Array<number> = [1,2, 'as'] 

# Useful Vue doc links
* https://vuejs.org/guide/introduction.html
* https://vuejs.org/examples/#hello-world
* https://vuejs.org/tutorial/#step-1https://vuejs.org/tutorial/#step-1
* https://vuejs.org/guide/scaling-up/state-management
* https://vuejs.org/guide/essentials/list 

# Stretch Goals
* achievements
* saving
* consider https://pinia.vuejs.org/ pinia for state management
* Add some flavor! Maybe some intro text at the very least?
* Eventually locations will need to be generated with Vue components
* basic pickaxe system (affects your basic clicker)