exports.run = (client  , message  , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json')


    const red =  config.vermelho;
    let ComandosDeAdminitração = ['**Ban,Kick,Report,Clear,RemoveRole,AddRole**'];
    let ComandosComuns = ['**Avatar,BotInfo,Help,Invite,Ping,Say,ServerInfo**'];
    let ServidoresParceiros = ['[Avengers Without Souls](https://discord.gg/MnaC3hJ)','[Ayumi - Discord Server!](https://discord.gg/Z2Bf4nB)'];
    let Github = ['[Myllena](https://github.com/DetectiveVini/Myllena)'];
    
    //m!help comando
//comando  = args[1]


        if(args[1] === 'ban'){
            message.channel.sendMessage(HelpBanEmbed)
        }
    let HelpBanEmbed = new Discord.RichEmbed()
    .setColor(red)
    .setDescription('a')
    .addField()
    .addField()
    .addField() 
    .addField();

    

    let HelpEmbed = new Discord.RichEmbed()
        .setColor(red)
        .setDescription('Comandos do Bot')
        .addField('Comandos de Administração', ComandosDeAdminitração)
        .addField('Comandos Comuns' , ComandosComuns)
        .addField('Servidores Parceiros' , ServidoresParceiros) 
        .addField('Github' , Github);

    return message.channel.sendMessage(HelpEmbed);


}