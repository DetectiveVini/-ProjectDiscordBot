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
        .addField('Comandos Comuns' , ComandosComuns)
        .addField('Servidores Parceiros' ,'[Avengers Without Souls](https://discord.gg/MnaC3hJ)','[Ayumi - Discord Server!](https://discord.gg/Z2Bf4nB)')
        .addField('Repositorio Github', '[Myllena](https://github.com/DetectiveVini/Myllena)');



    return message.channel.sendMessage(HelpEmbed);


}