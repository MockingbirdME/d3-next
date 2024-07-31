import { marked } from "marked";

const md = `
When a character wishes to attempt an action where success is not certain and failure is not guaranteed, or when a character's degree of success or failure matters, the GM may call for a skill check.

## Making a Skill Check

To perform a skill check follow these basic steps:

    1. Determine which action type the character is performing. Use the rules and guidance from that action type's description to aid in the remaining steps
    2. Declare which attribute is relevant to this action
    3. Determine what additional flat bonuses the character gets for this action
    4. Declare the failure and success thresholds as well as any potential uses for additional successes
    5. Determine the dice pool for this skill check:
        a. Start with 2 dice in the pool
        b. Choose if any action options are being used for this skill check
        c. Add any bonus or penalty dice gained from the character's skill level, action choice or options, environmental affects, or the like
    6. Make a standard dice roll using the dice pool from step 5 and the sum of your relevant attribute value and any flat bonus values, as determined in steps 2 and 3, as the modifier (skill checks don't have floors or caps). The roll total from this dice roll is the Skill Check Total for this skill check.
    7. Compare the skill check total to the failure and success thresholds to find the result of the action
    8. Augment the action result with any remaining successes
    9. Apply the action result and any augmentation to the scene

## Failure and Success Thresholds:

Failure and success thresholds give the GM a lot of options when it comes to skill check challenges. Generally speaking the failure threshold is the number below which the action fails, and their may be consequences and the success threshold is the number at which the action succeeds with the space between (if any) being where the action isn't quite either but is generally moving in the direction the actor wanted. 

The GM should set these two thresholds based on how likely an average attempter of this action is to fail or succeed on the check. If uncertain, it's a good rule of thumb that these thresholds be 3-4 points apart but that can vary wildly based on the action being attempted.

    * 0-3 - Very low rolls
    * 4-7 - Uncommonly low rolls
    * 4-12 - Average results will be in this range
    * 13-16 - Uncommonly high results
    * 17-19 - Very high rolls
    * 20+ - Outside of what an averagely skilled character can accomplish

## Skill Check Results

    * Less than Half Failure Threshold (Utter Failure) - The attempted action is unsuccessful and you suffer some setback, penalty, or otherwise something undesirable occurs
    * Lower than Failure Threshold (Failure) - The attempted action is unsuccessful but you suffer limited or no additional setback or penalty
    * Failure Threshold or Higher (Near Success) - The action was partially successful or you otherwise are closer to achieving that action on the next attempt
    * Success Threshold or Higher (Success) - Your action was successful with nothing extra gained
    * Higher than Success Threshold (Great Success) - The action was successful and you gain some additional benefit, bonus, or desirable addition to the outcome

### Example Skill Checks and results

##### Lifting the Gate

Thenry the Bold is attempting to lift a portcullis enough for his party to slide some blocks beneath so they can all crawl under. The GM has set the success threshold for this action at 15 (a difficult task) and the failure threshold a an average distance away at 13. 

If Thenry fails utterly, the GM plans to describe how he feels a small muscle in his back give instead of the gate imposing a 1 penalty die wound for all athletic or heavily physical actions until Thenry has a chance to rest up.

On a regular failure Thenry simply can't lift the portcullis and on a near success he may be able to get it high enough for the party to place some blocks and permit another try to get it the rest of the way with additional attempts having a reduced failure threshold of 10 and success threshold of 14.

If Thenry manages a success he's able to lift the gate high enough for the party to put their blocks down and crawl under but needing to leave their packs behind, while on a great success he manages to lift the gate above his head and engage the locking mechanism temporarily so the party can simply stroll under with all their gear.

It's good to note that he GM has a lot of leeway here on the thresholds as well as what happens on utter failures, great successes, and even near successes. A different GM might decide that a utter failure means he gets the gate a little bit up and then drops it, alerting the guards, that a near success get's the gate up enough but also engages locking mechanism that they can't easily release making it obvious someone has broken in, and that a great success allowed him to lift the gate and find a grip point that engages the counter weight granting him two bonus dice should he ever attempt to open this same gate again.


##### Catching the thrown knife

Sana is drunkenly attempting to catch a knife thrown to her by the inn keeper. The GM decides it would be fun to make a skill check for the inn keeper and adjust the success threshold based on that, settling on putting it at 12. Because this isn't an action the GM feels has any middle ground between success and failure they set the failure threshold at 12 as well eliminating any potential for a near success. 

On a regular success, Sana will catch the knife while on a regular failure, she'll fail to do so either missing it entirely or tapping it and sending it flying away. 

If Sana rolls an utter failure the DM intends to randomly choose between her and one of the nearby patrons to be stuck by the knife and suffer some damage symbolizing her either getting hit or knocking it away but into someone else. 

Finally if Sana rolls a great success the GM will explain how she catches it deftly, and possibly juggles it around before she's done. This will impress the patrons enough to have them start tossing some coins at her and clapping, the exact amount of currency she gets will depend on how many addition success she rolls. 

##### Jumping the collapsed section of bridge

Adventuring companions Mal and Met find that a bridge that's supposed to span the river has been washed out leaving a sizeable gap in the middle. They decide they're going to try to jump the gap. The GM decides that the gap is so wide the success threshold is a whopping 18 but because he feels the adventurers would have a good feel on their run up to the jump on if they might be able to make it or not he gives a much lower failure threshold of 10.

The GM let's them know ahead of time that an utter failure will result in the jumping character crashing down to the river, suffering a good deal of damage and being washed a significant distance downstream before they'd have a chance to try to swim. 

On a regular failure the GM decides to have their jump never fully take off. Using the exact result to flavor if they simply skid to a stop before leaping or if they feel their momentum is insufficient and in trying to stop themselves slip and catch the lip of their side of the bridge, requiring a further action to get back up.

On a regular success the jumper will make it across and on a great success they'll do so in such a way that gives a bonus to the second jumper (maybe they noticed a springy board that helped them or maybe they landed in such a way the bridge started to collapse more but temporarily leaving the landing platform lower than the launching one).

The GM decides that a near success will lead to the jumper either (they intend to randomize this if it happens) not quite making it but being able to grab onto the far edge of the bridge with a subsequent action allowing them to pull themselves up or making it successfully but having the landing cause the bridge to further break widening the gap and increasing the already high difficulty by 1. 
`

const html = `${marked.parse(md)}`;

const rules = {
  html,
  title: "Skill Checks"
}
export default rules;