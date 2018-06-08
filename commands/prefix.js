exports.run = async(client , message ,args) =>{
    const Discord = require('discord.js')
    const config = require('../config.json');
    const roxo = config.roxo;
    const fs = require('fs')

    if(!message.member.hasPermission("MANEGE_SERVER")) return message.channel.sendMessage('Você não pode fazer isso!');
    if(!args[0] == args['help']) return message.reply('Exemplo:m!prefix <escolha o prefixo aqui>');

    let prefixes = JSON.parse(fs.readFileSync("./prefix.json" , "utf8"));
        prefixes[message.guild.id] = {
            prefixex : args[0]
        };

        fs.writeFile("./prefix.json" , JSON.stringify(prefixes), (err) => {
            if(err) console.log(err) 
        });

        let sEmbed  = new Discord.RichEmbed()
            .setColor(roxo)
            .setTitle('Novo Prefixo!')
            .setDescription(`Modificado para ${args[0]}`);

            message.channel.sendMessage(sEmbed);
}