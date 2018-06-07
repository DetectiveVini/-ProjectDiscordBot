exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json');
    const api = require('../API');
    const Fortnite = require('./fortnite')
    const FortniteApi = new.Fortnite(api.FortniteToken);


}