const Discord = require('discord.js');

exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setDescription('**INFORMAÇÃO DO SERVER**')
            .setColor("#42f450")
            .setThumbnail(sicon)
            .addField("Nome do Server" , message.guild.name)
            .addField("Criado em " , message.guild.createdAt)
            .addField("Você entrou em" , message.member.joinedAt)
            .addField("Total de membros" , message.guild.memberCount)
        
        return message.channel.sendMessage(serverembed);

}

