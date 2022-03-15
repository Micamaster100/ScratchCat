//THIS WAS CREATED ON A PACK INCLUDING DISCORD.JS AND NODE.JS! MAKE SURE TO DOWNLOAD THEM BOTH IF YOU WANT TO CREATE A BOT BASED OFF MY SOURCE CODE.
/**Created by Micamaster100 on Visual Studio Code.**/

//Just some const vars to make this dev easier lol
const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 

const prefix = '-sc '; //This is the prefix, so commands will only be done if it began with "-sc" such as "-sc (command)"


//This code below is now just telling me on the console that my bot is online and that nothing went wrong setting this online (idk why i dont just remove it tho just don't ask.
client.once('ready', () => {
    console.log('ScratchCat is online.');
});


//Now THIS is where all the magic begins! Commands are sensed and respondent here.
client.on('message', message => {
    if(!message.content.startsWith(prefix,) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
//Some test thingy lol
    if(command === 'ping'){
        message.channel.send('pong');
    }
//This is the about command. Just some lil info about this bot.
    if(command === 'about'){
        message.channel.send('This bot is for all scratch servers, and can do a bunch of scratch-related stuff, like verify, and give some users information!');
    }
//if u dont kno where server is, just do dis.
    if(command === 'scserver'){
        message.channel.send('https://discord.gg/rUvnndKhsk');
    }
//Well this is help. It's kinda complicated to read (even for me too) but it's all just shortcuts to make it look neat in the actual Discord mesasge.
    if(command === 'help'){
        message.channel.send('>>> **Basic Commands:**\n`-sc help` ```shows this message```\n`-sc ping` ```pong```\n`-sc about` ```(brief description of ScratchCat)```');
    }
//test
    if(command === 'test'){
        message.channel.send('no u');
    }
});

client.login('private lol'); //And ofcourse, we need this login(aka bot token) to actually make this work on the bot
