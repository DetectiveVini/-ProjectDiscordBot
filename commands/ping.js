const Discord = require('discord.js');

module.exports.run = async (myllena , message , args) =>{

    let PingEmbed = new Discord.RichEmbed()
            .setColor('#4b42f4')
            .setTitle('Ping :ping_pong:')
            .setDescription('Meu ping é:' + `${Date.now() - message.createdTimestamp}`+ 'ms')//comando para latencia do bot
            .setTimestamp(new Date())
            //Fim do embed
            message.channel.sendMessage(PingEmbed);
            return;

}

module.exports.help = {
    name: 'ping'
}