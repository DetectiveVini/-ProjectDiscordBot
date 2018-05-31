const config = require('./config.json');
const Discord = require('discord.js');
const myllena = new Discord.Client({disableEveryone: true});


myllena.on('ready' , async () =>{
    console.log(`${myllena.user.username} está online!`)
    myllena.user.setGame('No Visual Studio Code')
})

myllena.on('message' , async message =>{
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}serverinfo`){
        let sicon = message.guild.displayAvatarURL;
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