const Discord = require('discord.js');
const config = require('../config.json');
const azul = config.azul;
module.exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    let PingEmbed = new Discord.RichEmbed()
            .setColor(azul)
            .setTitle('Ping :ping_pong:')
            .setDescription('Meu ping é:' + `${Date.now() - message.createdTimestamp}`+ 'ms')//comando para latencia do bot
            .setTimestamp(new Date())
            //Fim do embed
            message.channel.sendMessage(PingEmbed);
            return;

}

