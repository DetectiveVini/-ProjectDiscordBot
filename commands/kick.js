const Discord =require('discord.js')
const config = require('../config.json');
const azul = config.azul;
module.exports.run = (client , message , args) =>{
    
var PermissaoKickReturn = new Discord.RichEmbed()
.setColor(azul)
.setDescription('Você não tem permissao para kickar :oncoming_police_car:')
var MentionMemberReturn = new Discord.RichEmbed()
.setColor(azul)
.setDescription('Uso invalido. Por Favor faça como o seguinte exemplo:`m!kick @user#0000 `')
var KickForUser = new Discord.RichEmbed()
.setColor(azul)
.setDescription(`Kickado por${message.author.tag}`)
//Fim do embed

if(!message.member.hasPermission('KICK_MEMBERS', 'ADMINISTRATOR'))/*Verifica se o usuario tem essas permissoes*/ return (message.channel.send(PermissaoKickReturn))
        const PrimeiraMention = message.mentions.members.first()
if(!PrimeiraMention)return (message.channel.send(MentionMemberReturn))
PrimeiraMention.kick(KickForUser);
}

