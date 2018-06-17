const ytdl = require('ytdl-core');

module.exports.run = async(client , message , args , ops) =>{
    if(!message.member.voiceChannel) return;
    if(message.guild.me.voiceChannel) return;
    if(!args[0]) return;
    let validate = await ytdl.validateURL(args[0]);
    if(!validate) return;
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatcher =await connection.play(ytdl(args[0] , {filter : 'audioonly'}));

    message.channel.sendMessage(`Tocando: ${info.title}`);
}