const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const ServerEmbed = new Discord.MessageEmbed()
    .setColor(0xdf1c1c)
    .setTitle('Join our official servers for support and suggestions')
    .setDescription('For support and suggestions \nClick here - [Everest Studio Games](https://discord.gg/EZDfrer) \nFor Bot help join our server')
    .addField('Bot will be 24/7 online.' , 'Bot shutdown/offline = update/technical problems')
    .setThumbnail('https://cdn.discordapp.com/attachments/742415705789431818/743779804704276530/order_it_new.png')

    message.channel.send(ServerEmbed)

}

module.exports.help ={
    name: "server",
    aliases: []
}
