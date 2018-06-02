const Discord = require('discord.js');
module.exports.run = async(myllena , message , args) =>{
    return message.channel.send("hello!")
}
module.exports.help = {
    name : 'hello'
}