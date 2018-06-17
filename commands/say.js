module.exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    if(!message.member.hasPermission("SEND_MESSAGES")) return mesasge.reply("nop");
         const sayMessage = args.join(" ");
         message.delete().catch();
         message.channel.send(sayMessage);
}