module.exports.run = (client , message , args) =>{
    
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não.");
      if(!args[0]) return message.channel.send("não");
      message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
});
}