const Discord = require('discord.js');

module.exports.run = async (myllena , message , args) =>{
    //m!report  @user por está ...
    let rUser = message.guild.member(message.mentions.users.first()|| message.guild.members.get(args[0]));
    if(!rUser)  return message.channel.send("Não consigo encontrar o Usuario")
    let reason = args.join(" ").slice(22);//Razão do report

//Inicio do embed
    let ReportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor("#42f450")
        .addField("Usuario Reportado", `${rUser} com o ID ${rUser.id}`)//O usuario reportado e o ID dele
        .addField("Reportado por" , `${message.author} com o ID: ${message.author.id}`)//O autor da mensagem e o ID dele
        .addField("Canal" , message.channel)//O canal que a mensagem foi criada
        .addField("Tempo" , message.createdAt)//Quando a mensagem foi criada
        .addField("Razão" , reason);

//Final do Embed
    let reportsChannel = message.guild.channels.find(`name` , 'reports');
    if(!reportsChannel) return message.channel.sendMessage('Não consigo encontrar um canal de Report');//Se o dono do server não possuir um canal de reports
    
        message.delete().catch(O_o =>{});
        reportsChannel.send(ReportEmbed);//Todos os Reports irão para qualquer canal chamado reports
    return;
}
module.exports.help = {
    name: 'report'
}