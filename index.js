const Discord = require("discord.js");
const fs = require("fs");
const myllena = new Discord.Client({disableEveryone: true});
myllena.commands = new Discord.Collection();

if(err) console.log(err);
  
let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
  console.log("Não encontro o arquivo deste comando");
  return;
}

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  myllena.commands.set(props.help.name, props);
})


myllena.on('ready' , async () =>{
    console.log(`${myllena.user.username} está online!`)
    myllena.user.setActivity("Nada", {type: "WATCHING"})
    //myllena.user.setGame('No Visual Studio Code')
})

myllena.on('message' , async message =>{
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = myllena.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(myllena,message,args);

})

myllena.login(process.env.BOT_TOKEN);