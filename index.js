const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const http = require('http');
const fs = require("fs");
const server = require("./server.js")
const bot = new Discord.Client({disableEveryone: true});
const emoji = require('emoji')
const readline = require('readline');
require('events').EventEmitter.defaultMaxListeners = 15;

bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {


  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");

  if(jsfile.length <= 0){

    console.log("Couldn't find commands please create a commands folder and add cmds.");

    return;

  }


  jsfile.forEach((f, i) =>{

    let props = require(`./commands/${f}`);

    console.log(`${f} loaded!`);

    bot.commands.set(props.help.name, props);
fs.writeFile('./props.txt', props, (err) => {
  if(err) throw(err)
})
  });

});


bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("my prefix {+}", {type: "STREAMING"});


});


bot.on("message", async message => {

  if(message.author.bot) return;

  if(message.channel.type === "dm") return;


  let prefix = botconfig.prefix;

  let messageArray = message.content.split(" ");

  let cmd = messageArray[0];

  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if(commandfile) commandfile.run(bot, message, args);


});

bot.on('message', (message) => {
    if(message.channel.type === 'dm'){    
      message.react('👍')
        console.log("[" + message.author.username + "]: " + message.content) 
                fs.writeFile('/StaffApp.txt', message + "+" + message.author.username, (err) => {                                        console.log(err, message.content)
                    console.log(err, message.content)
                  })
      
     
     }
});

bot.on('message', (message) => {
  if(message.content == 'Hi')
    message.react("🙂")
})
  
bot.on('message', (message) => {
  if(message.content == 'oof')
    message.react("🤔")
})
  
bot.on('message', (message) => {
  if(message.content == 'orange')
    message.react("🍊")
  
})

bot.on('message', (message) => {
  if(message.content == 'AHHH')
    message.react("😱")
})

bot.on('message', (message) => {
  if(message.content == 'OK')
    message.react("👌")
})

bot.on('message', (message) => {
  if(message.content == '!React')
    message.react("👍")
})

bot.on('message', (message) => {
  if(message.content == '!React')
    message.react("👎")
  
})
//<:RainbowSteve2:476764733723115533>
bot.on('message', (message) => {
  if(message.content == 'RBS')
    message.react('476764733723115533')
  
})

bot.on('message', (message) => {
  if(message.content == '<@475435277444186114>')
    message.react("476777271240294415")
  
})

bot.on('message', (message) => {
  if(message.content == '<@514172544753074196>')
    message.react("496508661875736596")
  
})
/*
...
*/
bot.login("NTE0MTcyNTQ0NzUzMDc0MTk2.XQrdOQ.qgBeIeEhOtQzfYZlmNtSLCAEixs");









