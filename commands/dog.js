exports.run = (client ,message , args) =>{
    const Discord = require('discord.js');
    const superagent = requrie('superagent');
    const config = require('../config.json');
    const roxo = config.roxo;

    let {body} = superagent
        .get(`https://random.dog/woof.json`);
    
    let DogEmbed = new Discord.RichEmbed()
        .setColor(roxo)
        .seTitle('DOGGO')
        .setImage(body.url);

        message.channel.sendMessage(DogEmbed);


}