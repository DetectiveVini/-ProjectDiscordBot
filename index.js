const config = require('./config.json');
const Discord = require('discord.js');
const myllena = new Discord.Client({disableEveryone: true});


myllena.on('ready' , async () =>{
    console.log(`${myllena.user.username} está online!`)
    myllena.user.setActivity("Nada", {type: "WATCHING"})
    //myllena.user.setGame('No Visual Studio Code')
})

myllena.on('message' , async message =>{
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}ping`){
        var PingEmbed = new Discord.RichEmbed()
            .setColor('#4b42f4')
            .setTitle('Ping :ping_pong:')
            .setDescription('Meu ping é:' + `${Date.now() - message.createdTimestamp}`+ 'ms')//comando para latencia do bot
            .setTimestamp(new Date())
            //Fim do embed
        message.channel.sendMessage(PingEmbed);
        return;
    }

    if(cmd === `${prefix}report`){
        //m!report  @user por está ...
        let rUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
            if(!rUser)  return message.channel.send("Não consigo encontrar o Usuario")
        let reason = args.join(" ").slice(22);

        let ReportEmbed = new Discord.RichEmbed()
            .setDescription("Report")
            .setColor("#42f450")
            .addField("Usuario Reportado", `${rUser} com o ID ${rUser.id}`)
            .addField("Reportado por" , `${message.author} com o ID: ${message.author.id}`)
            .addField("Canal" , message.channel)
            .addField("Tempo" , message.createdAt)
            .addField("Razão" , reason);

        let reportsChannel = message.guild.channels.find(`name` , 'reports');
        if(!reportsChannel) return message.channel.sendMessage('Não consigo encontrar um canal de Report');
        

            message.delete().catch(O_o =>{});
            reportsChannel.send(ReportEmbed);

        return;
    }
    if(cmd === `${prefix}serverinfo`){//Serverinfo
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
            .setDescription('**INFORMAÇÃO DO SERVER**')
            .setColor("#42f450")
            .setThumbnail(sicon)
            .addField("Nome do Server" , message.guild.name)
            .addField("Criado em " , message.guild.createdAt)
            .addField("Você entrou em" , message.member.joinedAt)
            .addField("Total de membros" , message.guild.memberCount)
        
        return message.channel.sendMessage(serverembed);
    }    
    //m! say hello
    if(cmd === `${prefix}hello`){
        return message.channel.send("hello!")
    }
    if(cmd === `${prefix}botinfo`){

        let bicon = myllena.user.displayAvatarURL;
        let botinfo = new Discord.RichEmbed()
            .setDescription("**BOT INFO**")
            .setColor("#42f450")
            .setThumbnail(bicon)
            .addField("Bot Name" , myllena.user.username)
            .addField("Criado Em" , myllena.user.createdAt)
            
            
     return message.channel.send(botinfo);   
    }  
})

myllena.login(process.env.BOT_TOKEN);