const config = require('./config.json');
const Discord = require('discord.js');
const myllena = new Discord.Client({disableEveryone: true});


myllena.on('ready' , async () =>{
    console.log(`${myllena.user.username} is online!`)
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

    
})

myllena.login(process.env.BOT_TOKEN);