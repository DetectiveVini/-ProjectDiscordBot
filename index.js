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
    
    //m! say hello
    if(cmd === `${prefix}hello`){
        return message.channel.send("hello!")
    }
    if(cmd === `${prefix}botinfo`){

        let botinfo = new Discord.RichEmbed()
            .setDescription("**BOT INFO**")
            .setColor("#42f450")
            .addField("Bot Name" , myllena.user.username);






     return botinfo;   
    }  
})

myllena.login(process.env.BOT_TOKEN);