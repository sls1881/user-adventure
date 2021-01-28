import questData from '../data.js';
import { getUser } from '../localStorage.js';

const ul = document.querySelector('ul');

const user = getUser();

let allCompletedQuests = true;

for (let quest of questData) {
    if (!user.completed[quest.id]) {
        allCompletedQuests = false;
    }
}

const health = user.ahp;
const money = user.bb;

if (allCompletedQuests || health <= 0 || money <= 0) {
    window.location = '../result.html';
}

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    li.style.left = quest.map.left;
    li.style.top = quest.map.top;


    li.append(a);
    ul.append(li);

}