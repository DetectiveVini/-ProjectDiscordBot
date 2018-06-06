exports.run = (client , message ,  args) =>{
    const Discord = require('discord.js');
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
         const sayMessage = args.join(" ");
         message.delete().catch();
         message.channel.send(sayMessage);
}