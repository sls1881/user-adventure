import { health } from './health.js';
import { money } from './money.js';
import { aliveHealthMessages, deadHealthMessages, deadOrAliveMoneyMessages, } from './message.js';
import { getUser } from '../localStorage.js';

const user = getUser();

const resultMessage = document.getElementById('messages');

const resetButton = document.querySelector('button');

const resultMoney = money(user.bb);
const resultHealth = health(user.ahp);

const moneyMessage = deadOrAliveMoneyMessages[resultMoney];

let burgerBuckMessages = null;

if (resultMoney === 'starved') {
    burgerBuckMessages = deadHealthMessages;
} else {
    burgerBuckMessages = aliveHealthMessages;
}

const healthMessage = burgerBuckMessages[resultHealth];

const results = `${user.character}, after years of eating at Bob's Burgers, you ${moneyMessage} and ${healthMessage}.`;

resultMessage.textContent = results;

resetButton.addEventListener('click', () => {
    window.location = '../index.html';
});