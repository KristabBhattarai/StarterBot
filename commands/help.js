const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const HelpEmbed = new Discord.MessageEmbed()
    .setColor(0x236edf)
    .setTitle('Help menu of Order It')
    .setDescription('Detail.')
    .addField("If you got any problem using this source code then join our server" , "https://discord.gg/EZDfrer")
    
    message.channel.send(HelpEmbed)


}

module.exports.help ={
    name: "help",
    aliases: []
}
