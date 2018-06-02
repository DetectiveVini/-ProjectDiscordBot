const Discord = require('discord.js');

exports.run =  (client , message , args) =>{
    const Discord = require('discord.js');
    let PingEmbed = new Discord.RichEmbed()
            .setColor('#4b42f4')
            .setTitle('Ping :ping_pong:')
            .setDescription('Meu ping é:' + `${Date.now() - message.createdTimestamp}`+ 'ms')//comando para latencia do bot
            .setTimestamp(new Date())
            //Fim do embed
            message.channel.sendMessage(PingEmbed);
            return;

}

