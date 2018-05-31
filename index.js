const config = require('./config.json');
const Discord = require('discord.js');

bot.on('ready' , async () =>{
    console.log(`${bot.user.username} is online!`)
})

bot.login(process.env.BOT_TOKEN);