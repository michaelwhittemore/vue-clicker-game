# Todos

# Things to work on immediately 
* 
    2. Add the prospecting tool then start new resources. 
        * adding the data 
            - `An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead`
        * # HERE! 
            * still need to add the narrative trigger
            * maybe this will be a chance to succeed
                - maybe a failure popup if we don't find anything?
        - **BUG** The loading animation doesn't persist when switching tabs? maybe we will need to do manual calculations for it instead of an animation?? - This might be worth discord
    3. manufacturing skill
        - ~~right now just get xp for refining~~
        - will want to add the manufactory (maybe find a better word)
        - we might need to start doing something about the UI being way too big (the locations I mean)
    4. Currently, automaton values are hard coded (i.e. autoMiner output, autoRefiner costs), it would be nice if we placed it in `gameStateStorage`. Once all the values are being used instead of the hard coded values, we can start looking into upgrades for our automatons
        - calculateResourceIncomeFactory is one place to touch
        - need to look at `automatonData` - but how to deal with the `AutomatonData` interface? - maybe some optional properties 
    5. Need to add a disable prop to selectable tab so that I can grey out travel on the ship
        - Maybe do a similar thing when there are no more schematics??
    5. Rebalance the refinery upgrades to preempt the advancedAutoRefiner and goldMiner. maybe switch so the refinery upgrades trigger the automaton schematics??
    6. Add hover text for the automatons and skill xp bar. XP bar tells what the skill does, automatons how much each produces/consumes
    7. Put the automatons and resources on separate lines
        
---------
* Current Tasks: 
    2. For the ship:
        - Eventually travel will be tied to repair, but let's just let you do it right now
        - add a simple `launch` button to the travel section
            - possibly have a SciFi-y launch animation? Like some screen shake? 
        - is it possible the ship can get damaged again in the future?
    2. Add the manufactory and the ability to repair it
    3. **HERE!** Look into refactoring tabs like I have in the shop
        - ~~So we'd have a reusable component that works for either~~
        - Maybe test it on `ship`
    8. We should add a class to replace 'button', or style the buttons a lot more?
    10. Make the locations more mobile responsive 
        - may need to resize
        - on mobile maybe 2x2? Also less space in between
        - may need to modify css for `locationsHolder`
    11. Allow the refinery to be upgraded multiple times
    12. For some automatons increase the price after certain intervals (i.e. after 10 miners)
        - Call it something like ('signal interference,') add a tech to remove the associated cost - call the tech something like 'improvedAutoPath'?
        - Also make the automatons cheaper by default
    13. ~~Maybe add a UI to the current resources to show the per second rate??~~
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
        - these will also require some automatons of their own
    17. At level 20 mining you should get a chance for double gold
    18. Maybe the narrative area eventually gets the split treatment for achievements? - like it shows the achievement tab? Name the primary narrative one as "journal"
        - maybe achievements are tied to certain amounts of automatons? getting 50, 100 ect... 
        - We will need point values for achievements
    19. Collapsible skill menu? 
    20. Auto builder (select an automaton to build)

# Possible Skills, upgrades, tools, ect... 
* Skills   
    * Piloting - affects ship speed, cargo carried?
        - maybe you have a chance to crash and damage your ship?
        - maybe decreases fuel cost if I chose to implement fuel?
    * Innovation? - randomly roll to get some schematics? How do we get it? 
        - also maybe gives so schematics for free
        - I think XP will be tied to building (not buying) upgrades, like from the refinery
        - maybe also get XP from using the prospecting tool??
    * Manufacturing - affects refining (or maybe just get the xp from it)
    * Prospecting - used to find new resources, gold, and applies to boosts? - generated by mining gold?
    * Robotics at certain ranks should reduce cost to build automatons
* Resources
    * Building materials - maybe purchased and scavenged
    * possibly salvaged?
    * Silicon - used for advanced electronics
    * Plastic - used for manufacturing - plastic nuggets? - narrative character express mild bewilderment - also remember that this isn't hard SciFi in the slightest, can add whatever crystallized silliness I'd like
    * Oil - used for ship travel - "extract oil"? maybe use as fuel for your ship - can also buy from trader for outrageous cost?


# Immediate future tasks
* I should probably switch the helpers to composables - actually I'm not sure that's even correct, it looks like composables have their own state?
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
* add coloration to the rate tooltips (i.e. income)
* Need a more distinctive font(s)
* different color for buttons for upgrades, actions, building (especially on something like the refinery)
* The buttons look ugly and like forms, should at the very least change the color and maybe center them?
* ~~Add some kind of animation when mining or building? maybe a little `+1 ore` popup? Will need to do some research~~
* Look at a mobile game or civ or something for UI inspiration for resource bar
* ~~maybe switch the narrative back to the top and just hard code the height? - need to fix the scrolling first I think~~
* I should give the narrative area scrolling and a maximum height - I will also want it to scroll down - also some spacing between text
* add a new schematic thing? Like a badge when one is available
* Should I try with randomness in location - like a 10px difference? (for animations)
* Maybe we have a notification badge when new schematics are available?
* different colors for resources depending on amount (like red when zero)

# General Notes
* look into a typescript guide, feel like I'm missing some stuff
* I should read more about the virtual DOM https://vuejs.org/guide/extras/rendering-mechanism 
* Should read up on typescript best practices
* read about css animations
* I think part of my issue here is my attempt to have everything as a "derived" state. i.e. normally if I was building as I would in previous projects i'd have a more imperative? focus, like on certain actions I'd just manually push to the narrative, here's I'm trying to do more declarative stuff and relying on getters and states that are based upon other states as opposed to flags that I'm setting with conditionals
* TS non-null assertion operator is a single bang 

# Rebalancing notes
* Maybe shop should appear after refining a certain amount of steel?
* maybe have gold come in at level 2 or 3?
* should be viable to sell, right now the rate seems punishing
* gold should be rarer
* in general, remember that this should be a long term game
* maybe pickaxe higher level requirements?
* Have refinery upgrades available sooner (maybe first tier schematics don't need to be locked)
* trading level should effect some schematics pricing (definitely need a max reduction, maybe 50%?)

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
* https://dev.to/jacobandrewsky/good-practices-and-design-patterns-for-vue-composables-24lk
* https://www.cerbos.dev/blog/productivity-paradox-of-ai-coding-assistants

# Stretch Goals
* achievements
* saving
* consider https://pinia.vuejs.org/ pinia for state management
* have a dynamic illustration of the ship based on components and maybe in flight??
