module.exports.run = (client , message , args) =>{
    const Discord = require('discord.js')
    //Incio do Embed
    let InviteEmbed = new Discord.RichEmbed()
    .setColor('#4b42f4')
    .setTitle('Convite Do Bot')
    .setDescription('Aqui está o convite do bot [Clique aqui](https://discordapp.com/api/oauth2/authorize?client_id=452234115236888576&permissions=0&scope=bot)')
    .setTimestamp(new Date())
    //Fim do embed
    message.channel.sendMessage(InviteEmbed);
}