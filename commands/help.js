const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) => {
let cd = '.'
let help = new Discord.RichEmbed()
.setDescription("Help Commands")
.setColor("GREEN")
.addField("Commands", cd)
.addField("say - Repeats what you say when executed", cd)
.addField("Ban - Bans player", cd)
.addField("Kick - Kicks someone", cd)
.addField("tmute - mutes someone", cd)
.addField("warn - warns someone", cd)
.addField("wl - warnlevel/amount of warns", cd)
.addField("clear - wipes chat", cd)
.addField("Give - add roles", cd)
.addField("remove - takes away role", cd)
.addField("prefix - change prefix", cd)

message.channel.send(help)

}

module.exports.help = {

  name: "help"

}