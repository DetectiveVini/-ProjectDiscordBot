const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')
const fs = require('fs')//Modulo 

client.on('ready', () => {
  console.log('Inicializado com sucesso');
});
client.on('guildMemberAdd', async member =>{
  console.log(`${member.id} entrou no server!`);

  let CanalBemVindo = message.guild.channels.find(`name` , 'bemvindo');
  CanalBemVindo.send(`Bem vindo ${member}!`)
})
//Prefix personalizado

client.on('message' , async message =>{


  let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));

  if(!prefixes[mesaage.guild.id]){
    prefixes[message.guild.id] = {
      prefixes:config.prefix
    }
  }
  let prefix = prefixes[message.guild.id].prefixes;
  console.log(prefix);

})

client.on('channelCreate',console.log)//CanalCriado
client.on('channelDelete',console.log)//CanalDeletado
//
client.on('guildCreate',console.log)//Entrou no server
client.on('guildDelete',console.log)//Saiu do server


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {

  if(!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
//Anti-Comando errado

let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
//
let args = message.content.split(" ").slice(1);
// 
try {
    let commandFile = require(`./commands/${command}.js`);//Importando os comandos da pasta commands
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
})

client.login(process.env.BOT_TOKEN);