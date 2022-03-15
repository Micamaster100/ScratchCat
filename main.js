//THIS WAS CREATED ON A PACK INCLUDING DISCORD.JS AND NODE.JS! MAKE SURE TO DOWNLOAD THEM BOTH IF YOU WANT TO CREATE A BOT BASED OFF MY SOURCE CODE.
/**Created by Micamaster100 on Visual Studio Code.**/

const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 

const prefix = '-';

client.once('ready', () => {
    console.log('ScratchCat is online.');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
    if(command === 'about'){
        message.channel.send('This bot is for all scratch servers, and can do a bunch of scratch-related stuff, like verify, and give some users information!');
    }
    if(command === 'scserver'){
        message.channel.send('https://discord.gg/rUvnndKhsk');
    }
});

client.login('private lol');
