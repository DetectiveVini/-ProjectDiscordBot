const Discord = require('discord.js')
exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    let bicon = client.user.displayAvatarURL;
    let botinfo = new Discord.RichEmbed()
        .setDescription("**BOT INFO**")
        .setColor("#42f450")
        .setThumbnail(bicon)
        .addField("Bot Name" , client.user.username)
        .addField("Criado Em" , client.user.createdAt)
        .addField('Ping', `${Date.now() - message.createdTimestamp}`);
    return message.channel.sendMessage(botinfo);
}
