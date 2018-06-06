exports.run = (client  , message  , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json')
    const red =  config.vermelho;
    let ComandosDeAdminitração = ['**Ban,Kick,Report,Clear,RemoveRole,AddRole**']
    let ComandosComuns = ['**Avatar,BotInfo,Help,Invite,Ping,Say,ServerInfo**']
    let HelpEmbed = new Discord.RichEmbed()
        .setColor(red)
        .setDescription('Comandos do Bot')
        .addField('Comandos de Administração', ComandosDeAdminitração)
        .addField('Comandos Comuns' , ComandosComuns);



    return message.channel.sendMessage(HelpEmbed);


}