const Discord = require('discord.js');

const client = new Discord.Client();
 
client.commands = new Discord.Collection();

const prefix = '_';

const ms = require('ms');
 


const fs = require('fs');
 


 
 
 
client.once('ready', () => {
    console.log('Loops bot is now online');
    client.user.setActivity('Daddy', {type: 'WATCHING'}).catch(console.error);
})

client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;
    if(!message.content.startsWith(prefix));



    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();



    if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'purge'){
        client.commands.get('purge').execute(message,args);
    } else if(command === 'memberinfo'){
        client.commands.get('memberinfo').execute(message,args);
    } else if(command === 'embed'){
        client.commands.get('embed').execute(message,args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message,args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message,args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message,args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message,args);
    } else if(command === 'say'){
        client.commands.get('say').execute(message,args);
    }
    })


    client.login('botsettings.token');