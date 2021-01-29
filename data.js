const bob = {
    id: 'Bob',
    title: 'Bob at the Grill',
    map: {
        top: '220px',
        left: '350px'
    },
    image: 'https://i.gifer.com/ETf.gif',
    description: `You take a seat at the bar and look over the menu. "Hmmm, what should I order?" you think to yourself. Should I try the burger of the day? Review the menu and make your selection.`,
    choices: [{
        id: 'Cheeses',
        description: 'Cheeses Is Born Burger (comes with baby Swiss cheese)',
        result: `You had a spiritual awakening while eating your burger. Lucky for you, this burger has zero calories, which means, you've earned 20 Artery Health Points. Unfortunately, due to your new awakening, you are much more charitable and you tip generously. Lose 20 Burger Bucks.`,
        ahp: 20,
        bb: -20
    }, {
        id: 'Paranormal',
        description: 'Paranormal Pepper Jack-tivity Burger (comes with pepper Jack cheese)',
        result: `Oh no! You've been possessed by a ghost. Since you can no longer eat you lost 50 Burger Bucks and you will soon starve to death.
        `,
        ahp: 0,
        bb: -50
    }, {
        id: 'Blondes',
        description: 'Blondes Have More Fun-gus Burger (comes with mushrooms)',
        result: `You are now blonde, and therefore, you now have more fun. Obvi! Your new energetic lifestyle has gained you 10 Artery Health Points, but you lost 20 Burger Bucks because you had to pay for the hair dye.
        `,
        ahp: 10,
        bb: -20
    }]
};

const tina = {
    id: 'Tina',
    title: 'Tina Waiting Tables',
    map: {
        top: '500px',
        left: '500px'
    },
    image: 'https://media4.giphy.com/media/3og0ISqDkcyxZ6dybS/source.gif',
    description: `
        On your next visit to Bob's Burgers, you take a set at a table when you notice an awkward dark haired girl approaching you with a menu. She hands you the menu and starts chatting with you about:  
    `,
    choices: [{
        id: 'Butts',
        description: 'Butts',
        result: `
            Butts, butts, butts! You made the right choice because Tina loves to talk about butts. You've brightened the day of a young blossoming girl, so you've earned 20 Burger Bucks and 20 Artery Health Points. Go out there and kick some butt!
        `,
        ahp: 20,
        bb: 20
    }, {
        id: 'Jimmy',
        description: 'Jimmy Jr.',
        result: `
            Tina loves to talk about Jimmy Jr., but now that you brought him up, all she can think about is his butt. You lose 20 Artery Health Points and 20 Burger Bucks for not picking BUTTS!
        `,
        ahp: -20,
        bb: -20
    }, {
        id: 'Equestranauts',
        description: 'The Equestranauts',
        result: `
            If you knew anything about Tina you'd know that all topics lead back to butts. Surprisingly, even equestrian conversation. This question only had one right answer and you didn't pick it. You lose 20 Burger Bucks and 20 Artery Health Points. What an idiot.
        `,
        ahp: -20,
        bb: -20,
    }]
};

const louise = {
    id: 'Louise',
    title: 'Louise up to Shenanigans',
    map: {
        top: '420px',
        left: '100px'
    },
    prerequisites: ['bob', 'tina'],
    image: 'https://i.pinimg.com/originals/ea/c5/a9/eac5a9a73091dab6697025ce69b21c94.gif',
    description: `
        Now that you're done eating, Louise has invited you to play a prank on her family with her. You must be fully committed for it to work. Choose your shenanigans wisely, your life may depend on it.
    `,
    choices: [{
        id: 'couch',
        description: 'Sabotaging The Belcher Family Couch',
        result: 'You need to help the belchers pay for a new couch. You lose 50 Burger Bucks and gain 20 Artery Health Points for helping them move it!',
        ahp: 20,
        bb: -50
    }, {
        id: 'steal',
        description: 'Stealing A $1,000 Check For A Movie Screening',
        result: 'Stealing is wrong? Luckily, your little scam earned the restaurant enough money for you to walk away without losing or gaining any points.',
        ahp: 0,
        bb: 0
    }, {
        id: 'flesh',
        description: "Telling Her Class That Bob's Burgers Serves Human Flesh",
        result: 'Your little scam brought in new customers, old people, so you earned 50 Burger Bucks.',
        ahp: 0,
        bb: 50
    }]
};

const quests = [
    bob,
    tina,
    louise,
];

export default quests;