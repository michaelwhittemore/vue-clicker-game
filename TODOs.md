# Todos
* typescript definition for stateStorage
* lets create a more clear game play flow (even if I haven't themed/skinned it yet)
    - oooh maybe some kind of economic theme? Like first you create goods and then sell them??
    - let's go scifi - space traders, starting off in some backwoods planet. Cliche? yes, but it's a learning project, not a work of art
* display the 'currency' amount and also the number of clickers you own. 
    - Need a display section and a generic kind agnostic component 
    - https://vuejs.org/guide/essentials/list 
* differentiate between a clicker buy button and the currency on click 
* then we can create a larger game board and UI
* Issue with `has no default export.` seems like possibly due to script missing the `setup` tag?
    - Yep! `setup` fixes it!

# Things to work on immediately 
* I think there are two options to start with 
    - Either the state/game loop 
        - We will need to pass the state into the gameLoop function/object
            - should we separate the game tick and the interval? I think probably not
    - Or the button
        - Need to bind some function to the button's onclick
* I guess we start with a game tick 
* A 'click' button
* https://vuejs.org/guide/scaling-up/state-management - we will need a reactive state object to track our state - I think we will need a separate `gameTick` function from the state

# General Notes
* Will need to mention this was to learn vue and to refresh my typescript knowledge 
    - mention cookie clicker explicitly and the incremental genre 
* `env.d.ts` need to make sure all my types are here
    - if not `env` then at least some kind of typescript definition files - https://www.typescriptlang.org/docs/handbook/2/type-declarations.html 
* look into a typescript guide, feel like I'm missing some stuff
* typescript eslint
* I should read more about the virtual DOM https://vuejs.org/guide/extras/rendering-mechanism 


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
