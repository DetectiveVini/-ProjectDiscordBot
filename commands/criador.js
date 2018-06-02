exports.run = (client , message, args) =>{
    const Discord = require('discord.js');
    var CriadorEmbed = new Discord.RichEmbed()
            .setColor('#4b42f4')
            .setDescription('Criador Vinni#3130')



message.channel.sendMessage(CriadorEmbed);

}