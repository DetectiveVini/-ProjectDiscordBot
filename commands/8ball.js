exports.run = async (client , message , args) =>{
    const Discord = require('discord.js');
    const config = require('../config.json');
    const azul = config.azul;
    //Ideia do Comando
    //m!8ball <pergunta  etc>
    //args[1] = pergunta
    //args[0] = 8ball
    //args[2] = etc

    if(!args[2]) return message.channel.sendMessage('Pergunte alguma coisa!');
    let respostas = ["Sim" , "Não" , "Não sei" , "Pergunte Denovo"];

    let resuntado = Math.floor((Math.random()* respostas.length/*Vai multiplicar pela quantidade de respostas*/));
    let pergunta = args.slice(1).join(" ");

    let BallEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)//Nick do autor da message ou comando
        .setColor(azul)
        .addField("Pergunta" , )
        .addField("Resposta" , respostas[resuntado])

        message.channel.sendMessage(BallEmbed);



}