const config = require('./config.json');
const Discord = require('discord.js');
const myllena = new Discord.Client({disableEveryone: true});


myllena.on('ready' , async () =>{
    console.log(`${myllena.user.username} is online!`)
    myllena.user.setGame('No Visual Studio Code')
})

myllena.login(process.env.BOT_TOKEN);