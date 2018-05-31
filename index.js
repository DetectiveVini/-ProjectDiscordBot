const config = require('./config.json');
const Discord = require('discord.js');
const myllena = new Discord.Client({disableEveryone: true})


myllena.on('ready' , async () =>{
    console.log(`${bot.user.username} is online!`)
})

myllena.login(process.env.BOT_TOKEN);