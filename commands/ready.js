const Discord = require('discord.js');
const config  = require('../config.json');
const OwnerID = config.ownerID;
const azul = config.azul;
const ReadyMessage = args.join(" ")

module.exports.run = async(client , message , args) =>{
    
    if(message.author.id !==  OwnerID) return message.channel.sendMessage('Você não pode usar este comando');
 
    client.user.setPresence({ game: { name: `${args[0]} ${args[1]}`, type:  1} });

        const ModificandoOStatus  = args.join(" ");
        let NomeDoUsuario = (message.author.tag)
        let ReadyEmbed = new Discord.RichEmbed()
            .setAuthor(NomeDoUsuario)
            .setColor(azul)
            .setDescription('Ready modificado com Sucesso!')
            .addField('Modificado para:' , ModificandoOStatus);


            return message.channel.sendMessage(ReadyEmbed);

}