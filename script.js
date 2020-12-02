const randMsg = {
    nickname: ['my wonderful chum', 'my good buddy', 'pal', 'friendo', 'Your Eminence', 'Capitano'],
    adjective: ['lovely', 'marvellous', 'splendid', 'exciting', 'daring', 'sartorially ingenious', 'resplendent'],
    clothes: ['pair of boots', 'scarf', 'cowboy hat', 'Snuggy', 'king robe', 'suit of armor', 'leopard-print leotard'],
    activity: ['eat berries', 'make some scones', 'change a lightbulb', 'plot a revolution', 'go to every bodega in New York City'],
    generateMsg(){
        let rdNickIdx = Math.floor(Math.random() * this.nickname.length);
        let rdAdjIdx = Math.floor(Math.random() * this.adjective.length);
        let rdClothesIdx = Math.floor(Math.random() * this.clothes.length);
        let rdActIdx = Math.floor(Math.random() * this.activity.length);
        console.log(`Hello, ${this.nickname[rdNickIdx]}!`); 
        console.log(`I say, what a ${this.adjective[rdAdjIdx]} ${this.clothes[rdClothesIdx]} you've got there!`); 
        console.log(`Would you like to get together sometime and ${this.activity[rdActIdx]}?`);
    }

};
randMsg.generateMsg();