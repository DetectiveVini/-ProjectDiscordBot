exports.run = (client , message , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json');
    const Fortnite = require('./fortnite')
    const FortniteApi = new Fortnite (process.env.FORTNITE_TOKEN);


    //m!fortnite usuario plataforma

    let usuario = args[0];
    let plataforma = args[1] || 'pc';

    let data = FortniteApi.getInfo(usuario , plataforma).then(data =>{

            console.log(data);





    }).catch(e =>{
        console.log(e);
        
        message.channel.sendMessage('Não encontro o usuario no banco de dados')
    });





}