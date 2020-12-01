require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if (message.content.includes('bot')) {
        const replay = message.content.replace('bot', 'human');
            message.reply(replay);
    }


    if (message.content === 'pls gif') {
        message.reply('https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif')
    }

    if (message.content === 'RockPapirScisso') {
        message.reply('https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif')
    }

    if (message.content === 'help') {
        message.reply(
            'Hi heres some stuff i can do:' + '\n' +
            'pls gif' + '\n' +
            'play RockPapirScissor or play RPS'
        );
    }
});

/*
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


 */
client.login(process.env.BOT_TOKEN);