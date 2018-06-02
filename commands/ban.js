exports.run = (client , message , args) =>{
    const Discord = require('discord.js')
    var permissaoForBan = new Discord.RichEmbed()
        .setColor('#4b42f4')
        .setDescription(':oncoming_police_car: Você não tem permissao para banir :oncoming_police_car:')
    var UsoInvalido = new Discord.RichEmbed()
        .setColor('#4b42f4')
        .setDescription('Uso invalido. Por Favor faça como o seguinte exemplo:`d!ban @user#0000 <time>`')
    
    
        if(!message.member.hasPermission('BAN_MEMBERS', 'ADMINISTRATOR'))/*Verifica se o usuario tem essas permissoes*/ return (message.channel.send(permissaoForBan))
                const PrimeiraMention = message.mentions.members.first()
        if(!PrimeiraMention)return (message.channel.send(UsoInvalido))
        PrimeiraMention.ban({//Não colocar embed
            days: args[1] || null,
            reason:`Banido por${message.author.tag}`
        });
    }