module.exports.run = (client , message , args) =>{
    
    const Discord =require('discord.js')
    const config = require('../config.json');
    const azul = config.azul;
    let bicon = client.user.displayAvatarURL;
    
    let botinfo = new Discord.RichEmbed()
        .setDescription("**BOT INFO**")
        .setColor(azul)
        .setThumbnail(bicon)
        .addField("Bot Name" , client.user.username)
        .addField("Criado Em" , client.user.createdAt)
        .addField('Ping', `${Date.now() - message.createdTimestamp}`);
    return message.channel.sendMessage(botinfo);
}
