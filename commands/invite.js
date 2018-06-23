const Discord =require('discord.js')
const config = require('../config.json');
const azul = config.azul;
module.exports.run = (client , message , args) =>{

    //Incio do Embed
    let InviteEmbed = new Discord.RichEmbed()
    .setColor(azul)
    .setTitle('Convite Do Bot')
    .setDescription('Aqui está o convite do bot [Clique aqui](https://discordapp.com/api/oauth2/authorize?client_id=452234115236888576&permissions=0&scope=bot)')
    .setTimestamp(new Date())
    //Fim do embed
    message.channel.sendMessage(InviteEmbed);
}