import { findById, renderQuest } from './questUtils.js';
import quests from '../data.js';

// -Grab the quest ID from the URL
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

//quests is the data and questID is the params.get variable
//arguments need to be in the same order as they are when you declare the function
const quest = findById(questId, quests);

renderQuest(quest);


// On radio button event listener submit 
// put the new stats in local storage
// We should get a feedback div for the result 
// Make another div with a span in quest for results

// On submit direct to result div (textContent)
// results.textContent = choices.result
// Hide submit button
// New event listener (click)
// Window.location back to map
