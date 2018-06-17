exsport.run = (client , message , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json')
    let OwnerID = config.ownerID;
    if(!message.author.id !== OwnerID) return message.channel.sendMessage('Você não pode fazer isso!');

    client.user.setPresence({ game: { name: `${args[0]}`, type:  1} });
}