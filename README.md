# EDIT-THIS-README

## Plan
Four pages
1. home
- Form for user data
    -Name
    -Radio character
    -Button

On click
    -Store data in local storage
    -Redirect user to the map
2. map/list
HTML
-ul for quests 

JS
If all quests are completed, redirect to the results page
Else,
-Grab quest data
Loop through it
generate a title for each quest
- If completed, check mark by it
-If it has not been completed, it's a link to the quest page
-If the user has less than or equal to zero hp redirect to results

3. quest
HTML
-header
-image
-P
-List of radio buttons (label and name)

JS
-Grab the quest ID from the URL
-Use findById to locate that quest in our quest data
-Use the quest to populate the elements of HTML

On submit
-Calculate user stats (health and gold)
-put the new stats in local storage
-redirect back to map

4. results
-Display some custom ending determined by user stats
    -If hp > 
        -else if hp <
            -else
Play again button

