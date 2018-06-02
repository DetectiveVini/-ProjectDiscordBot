const Discord = require('discord.js')
exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    let bicon = myllena.user.displayAvatarURL;
    let botinfo = new Discord.RichEmbed()
        .setDescription("**BOT INFO**")
        .setColor("#42f450")
        .setThumbnail(bicon)
        .addField("Bot Name" , myllena.user.username)
        .addField("Criado Em" , myllena.user.createdAt)
    return message.channel.sendMessage(botinfo);
}
