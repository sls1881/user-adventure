const bob = {
    id: 'Bob',
    title: 'Bob at the Grill',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'https://i.gifer.com/ETf.gif',
    description: `
        You take a set at the bar and look over the menu. "Hmmm, what should I order?" you think to yourself. Should I try to burger of the day? Review the menu and make your selection. 
    `,
    choices: [{
        id: 'Cheeses',
        description: 'Cheeses Is Born Burger (comes with baby Swiss cheese)',
        result: `
            You had a spiritual awakening while eating your burger. Lucky for you, this burger has zero calories, which means, you've earned 20 artery health points. Unfortunately, due to your new awakening, you are much more charitable and you tipped generously, so you lose 20 burger bucks.
        `,
        ahp: 20,
        bb: -20
    }, {
        id: 'Paranormal',
        description: 'Paranormal Pepper Jack-tivity Burger (comes with pepper Jack cheese)',
        result: `
            Oh no! You've been possessed by a ghost. Since you can no longer eat you've lost 50 burger bucks and you'll starve to death soon.
        `,
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

const tina = {
    id: 'Tina',
    title: 'Tina Waiting Tables',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToe23YIglNRIQqABet1LjKXszLTyUXZBA3fg&usqp=CAU',
    description: `
        On your next visit to Bob's Burgers, you take a set at a table when you notice an awkward dark haired girl approaching you with a menu. She hands you the menu and starts chatting with you about:  
    `,
    choices: [{
        id: 'Butts',
        description: 'Butts',
        result: `
            Butts, butts, butts! You made the right choice because Tina loves to talk about butts. You've brightened the day of a young blossoming girl, so you get 20 burger bucks and 20 artery health points. Go out there and kick some butt!
        `,
        ahp: 20,
        bb: 20
    }, {
        id: 'Jimmy',
        description: 'Jimmy Jr.',
        result: `
            Tina loves to talk about Jimmy Jr., but now that she's brought him up all she can think about is his butt. You lose 20 artery health points and 20 burger bucks for not picking BUTTS!
        `,
        ahp: -20,
        bb: -20
    }, {
        id: 'Equestranauts',
        description: 'The Equestranauts',
        result: `
            If you knew anything about tina, you'd know that all topics lead back to butts. Surprisingly, even equestrian conversation. This question only had one right answer and you didn't pick it. You lose 20 burger bucks and 20 artery health points. What an idiot.
        `,
        ahp: -20,
        bb: -20,
    }]
};

const louise = {
    id: 'Louise',
    title: 'Louise up to Shenanigans',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['bob', 'tina'],
    image: 'https://i.pinimg.com/originals/ea/c5/a9/eac5a9a73091dab6697025ce69b21c94.gif',
    description: `
        Now that you're done eating, Louise has invited you to play a prank on her family with her. You must be fully committed for it to work. Choose your shenanigans wisely, you're life depends on it.
    `,
    choices: [{
        id: 'couch',
        description: 'Sabotaging The Belcher Family Couch',
        result: 'You need to help the belchers pay for a new couch. You lose 50 burger bucks!',
        ahp: 0,
        bb: -50
    }, {
        id: 'steal',
        description: 'Stealing A $1,000 Check For A Movie Screening',
        result: 'Stealing is wrong? Luckily, you scam earned the restaurant enough money tht you are walk away without losing or gaining any points.',
        ahp: 0,
        bb: 0
    }, {
        id: 'flesh',
        description: "Telling Her Class That Bob's Burgers Serves Human Flesh",
        result: 'Your little scam brought in new customers, the old ones, so you earned 50 burger bucks.',
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