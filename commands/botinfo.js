const Discord = require('discord.js')
module.exports.run = async(myllena , message , args) =>{
    let bicon = myllena.user.displayAvatarURL;
    let botinfo = new Discord.RichEmbed()
        .setDescription("**BOT INFO**")
        .setColor("#42f450")
        .setThumbnail(bicon)
        .addField("Bot Name" , myllena.user.username)
        .addField("Criado Em" , myllena.user.createdAt)
}
module.exports.help = {
    name:'bot info'
}