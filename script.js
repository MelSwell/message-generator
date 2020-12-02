const randMsg = {
    nickname: ['my wonderful chum', 'my good buddy', 'pal', 'friendo', 'Your Eminence', 'Capitano'],
    clothes: ['pair of boots', 'scarf', 'cowboy hat', 'Snuggy', 'king robe', 'suit of armor', 'leopard-print leotard'],
    activity: ['eat berries', 'make some scones', 'change a lightbulb', 'plot a revolution', 'go to every bodega in New York City'],
    generateMsg(){
        let rdNickIdx = Math.floor(Math.random() * this.nickname.length);
        let rdClothesIdx = Math.floor(Math.random() * this.clothes.length);
        let rdActIdx = Math.floor(Math.random() * this.activity.length);
        let rdNickname = this.nickname[rdNickIdx];
        let rdClothes = this.clothes[rdClothesIdx];
        let rdActivity = this.activity[rdActIdx];
        console.log(`Hello, ${rdNickname}! I say, what a lovely ${rdClothes} you've got there! Would you like to get together sometime and ${rdActivity}?`);
    }

};
randMsg.generateMsg();