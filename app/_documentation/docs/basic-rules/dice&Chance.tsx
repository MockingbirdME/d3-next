import { marked } from "marked";

const md = `
Many aspects of D3 revolve around events that where the conclusion isn't known ahead of time; to resolve these events, dice are used to create psudorandom results. 

## Dice

D3 uses 10 sided dice numbered zero through nine. To pay D3 you need a handful of these 10 sided dice, ideally in 3 separate colors or patterns to be able to differentiate bonus dice, penalty dice, and standard dice for certain rolls. 

Any reference in the rules to a die or to dice refers to these 10-sided dice numbered 0-9.

### Alternative Dice

The base mechanics of D3 expect that you're using zero-indexed ten-sided dice however if your group doesn't have these dice available you can easily use one-indexed 10-sided dice and just increase all thresholds or results expected by 1 per die in the final result, or less precisely with standard six-sided dice using 3 six sided dice and raising the thresholds by 2 for every 2 standard dice the rules call for with the GM adjudicating how the imprecise conversion affects the final result.

## Die/Dice Rolls

D3 has a standard way of rolling dice for any event as follows: 

    1. Collect the dice pool of standard, bonus, and penalty dice called for in the dice roll and note if the roll has a cap, floor, or modifier applied.
    2. Roll all dice in the dice pool.
    3. One at a time, for each bonus die in the original dice pool, remove the lowest remaining die in the dice pool.
    3. One at a time, for each penalty die in the original dice pool, remove the highest remaining die in the dice pool.
    4. Sum the remaining dice (the number remaining will be equal to the number of standard dice in the original dice pool).
    5. Get the roll total. If the roll had no cap or floor the roll total is the sum of the remaining dice. If the roll has a floor that's higher than the sum, the roll total is the floor. If the roll has a cap that's lower than the sum, the roll total is the cap. 
`

const html = `${marked.parse(md)}`;

const rules = {
  html,
  title: "Dice and Chance",
  subtitle: "Putting the Roll in Roleplaying"
}
export default rules;