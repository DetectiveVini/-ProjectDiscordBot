module.exports.run = (client , message , args) =>{
    const Discord =require('discord.js')
    const config = require('../config.json');
    const azul = config.azul;
    
    var CriadorEmbed = new Discord.RichEmbed()
            .setColor(azul)
            .setDescription('Criador Vinni#3130')



message.channel.sendMessage(CriadorEmbed);

}