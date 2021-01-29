import { findById, renderQuest } from './questUtils.js';
import quests from '../data.js';
import { getUser, setUser } from '../localStorage.js';

// -Grab the quest ID from the URL
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

//quests is the data and questID is the params.get variable

//arguments need to be in the same order as they are when you declare the function
const quest = findById(questId, quests);

renderQuest(quest);

const button1 = document.querySelector('.submit');
const form = document.querySelector('form');

const resultSpan = document.createElement('span');

const button2 = document.createElement('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(selectionId, quest.choices);

    const user = getUser();

    user.ahp += choice.ahp;
    user.bb += choice.bb;

    resultSpan.textContent = choice.result;
    user.completed[questId] = true;

    setUser(user);
    button1.style.display = 'none';

    resultSpan.textContent = choice.result;
    resultSpan.classList.add('results');

    const domDiv = document.querySelector('.quest-data');
    domDiv.append(resultSpan);

    button2.textContent = 'Adventure time!';
    domDiv.append(button2);

});

button2.addEventListener('click', () => {
    window.location = '../map';
});


// On radio button event listener submit
// put the new stats in local storage
// We should get a feedback div for the result 
// Make another div with a span in quest for results

// On submit direct to result div (textContent)
// results.textContent = choices.result
// Hide submit button
// New event listener (click)
// Window.location back to map
