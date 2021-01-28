import questData from '../data.js';
import { getUser } from '../localStorage.js';
const ul = document.querySelector('ul');

let allCompletedQuests = true;

const user = getUser();

for (let quest of questData) {
    if (user.completed[quest.id]) {
        allCompletedQuests = false;
    }
}

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;

    const health = questData.ahp;
    const money = questData.bb;

    if (health || money <= 0) {
        window.location = '../result/result.html';
    }

    li.append(a);
    ul.append(li);

}

// - If completed, check mark by it
//     - If it has not been completed, it's a link to the quest page


// If all quests are completed, redirect to the results page