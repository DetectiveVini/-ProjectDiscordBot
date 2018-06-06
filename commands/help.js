exports.run = (client  , message  , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json')
    const red =  config.vermelho;

    let HelpEmbed = new Discord.RichEmbed()
        .setColor(red)
        .setDescription('Comandos do Bot')
        .addField('Addrole')
        .addField('avatar')
        .addField('ban')
        .addField('botinfo')
        .addField('clear')
        .addField('help')
        .addField('invite')
        .addField('kick')
        .addField('ping')
        .addField('removerole')
        .addField('report')
        .addField('say')
        .addField('serverinfo')


    return message.channel.sendMessage(HelpEmbed);


}