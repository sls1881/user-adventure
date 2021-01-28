import { setUser } from './localStorage.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const userChar = {
        name: formData.get('character'),
        ahp: 50,
        bb: 50,
        completed: {},
    };

    setUser(userChar);

    window.location = './map/index.html';

});