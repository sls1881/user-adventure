import { renderQuest } from '../quest/questUtils.js';

const test = QUnit.test;

test('The renderQuest function should check local storage for stats and stringify the result to return them or an empty array', (expect) => {
    //Arrange
    const testData = {
        id: 'Bob',
        title: 'Bob at the Grill',
        map: {
            top: '160px',
            left: '180px'
        },
        image: 'https://i.gifer.com/ETf.gif',
        description: `You take a seat at the bar and look over the menu. "Hmmm, what should I order?" you think to yourself. Should I try to burger of the day? Review the menu and make your selection.`,
        choices: [{
            id: 'Cheeses',
            description: 'Cheeses Is Born Burger (comes with baby Swiss cheese)',
            result: `You had a spiritual awakening while eating your burger. Lucky for you, this burger has zero calories, which means, you've earned 20 artery health points. Unfortunately, due to your new awakening, you are much more charitable and you tipped generously, so you lose 20 burger bucks.`,
            ahp: 20,
            bb: -20
        }, {
            id: 'Paranormal',
            description: 'Paranormal Pepper Jack-tivity Burger (comes with pepper Jack cheese)',
            result: `Oh no! You've been possessed by a ghost. Since you can no longer eat you've lost 50 burger bucks and you'll starve to death soon.`,
            ahp: 0,
            bb: -50
        }, {
            id: 'Blondes',
            description: 'Blondes Have More Fun-gus Burger (comes with mushrooms)',
            result: `
                You are now blonde, and therefore, you now have more fun. Obvi! Your new energetic lifestyle has gained you 10 artery points, but you lost 20 burger bucks because you have to pay for the hair dye.
            `,
            ahp: 10,
            bb: -20
        }]
    };

    const expected = `<div class="quest-data"><h1>Bob at the Grill</h1><img src="https://i.gifer.com/ETf.gif"><p>You take a seat at the bar and look over the menu. "Hmmm, what should I order?" you think to yourself. Should I try to burger of the day? Review the menu and make your selection.</p><form><button class="submit">Are you sure?</button><button>Adventure time!</button><label>Cheeses Is Born Burger (comes with baby Swiss cheese)<input type="radio" name="choices" value="Cheeses"></label><label>Paranormal Pepper Jack-tivity Burger (comes with pepper Jack cheese)<input type="radio" name="choices" value="Paranormal"></label><label>Blondes Have More Fun-gus Burger (comes with mushrooms)<input type="radio" name="choices" value="Blondes"></label></form></div>`;


    const actual = renderQuest(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);

});
