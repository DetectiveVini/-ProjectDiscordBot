exports.run = async (client ,message , args) =>{
    const Discord = require('discord.js');
    const superagent = require('superagent');
    const config = require('../config.json');
    const roxo = config.roxo;

    let {body} = await superagent
        .get(`https://random.dog/woof.json`);
    
    let DogEmbed = new Discord.RichEmbed()
        .setColor(roxo)
        .setTitle('DOGGO')
        .setImage(body);

        message.channel.sendMessage(DogEmbed);


}