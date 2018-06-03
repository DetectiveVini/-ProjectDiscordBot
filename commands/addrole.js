exports.run = (client , message , args) =>{
    const Discord = require('discord.js')
//m!addrole @user role
      //!addrole @andrew Dog Person
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não pode fazer isso!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Não consigo encontrar o usuario!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Selecione um cargo especifico");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não encontro o cargo");

  if(rMember.roles.has(gRole.id)) return message.reply("Ele já possui esse cargo");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Parabéns você recebeu o cargo ${gRole.name}`)
  }catch(e){
    message.channel.send(`Parabéns <@${rMember.id}>, você recebeu o cargo ${gRole.name}.`)
  }
}





