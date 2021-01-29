export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

//Bring in an element from the dom to append to in your function
const domDiv = document.querySelector('.quest-data');

export function renderQuest(quest) {

    const div = document.createElement('div');
    div.classList.add('quest-data');

    const h1 = document.createElement('h1');
    h1.textContent = quest.title;
    div.append(h1);

    const img = document.createElement('img');
    img.src = quest.image;
    div.append(img);

    const p = document.createElement('p');
    p.textContent = quest.description;
    div.append(p);

    const form = document.createElement('form');
    div.append(form);

    const choices = quest.choices;

    for (let choice of choices) {
        const label = document.createElement('label');
        label.textContent = choice.description;

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choices';
        input.value = choice.id;
        label.append(input);

        form.append(label);
    }

    const button1 = document.createElement('button');
    button1.textContent = 'Are you sure?';
    button1.classList.add('submit');
    form.append(button1);

    domDiv.append(div);

}

