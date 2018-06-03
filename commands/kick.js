exports.run =  (client , message , args) =>{
    const Discord = require('discord.js');
    //m!kick @user reason
let PermissaoKickReturn = new Discord.RichEmbed()
    .setColor('#4b42f4')
    .setDescription('Você não tem permissao para kickar :oncoming_police_car:')
let MentionMemberReturn = new Discord.RichEmbed()
    .setColor('#4b42f4')
    .setDescription('Uso invalido. Por Favor faça como o seguinte exemplo:`d!kick @user#0000 `')
let KickForUser = new Discord.RichEmbed()
    .setColor('#4b42f4')
    .setDescription(`Kickado por${message.author.tag}`)


    if(!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR'))//Verifica se o usuario tem essas permissoes return (message.channel.send(PermissaoKickReturn))
    let PrimeiraMention = message.mentions.members.first()
    if(!PrimeiraMention)return (message.channel.send(MentionMemberReturn))
    PrimeiraMention.kick(KickForUser);
    return;
    
}
