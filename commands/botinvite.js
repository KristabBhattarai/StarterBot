const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const InviteEmbed = new Discord.MessageEmbed()
    .setTitle('Invite our bot to your server')
    .setDescription('Click this to invite - [Order It](https://discord.com/oauth2/authorize?client_id=716257964767445043&scope=bot&permissions=8)')
    .setColor(0xF1C40F)
    .setThumbnail('https://cdn.discordapp.com/attachments/742415705789431818/743779804704276530/order_it_new.png')

    message.channel.send(InviteEmbed);


}

module.exports.help ={
    name: "invite",
    aliases: []
}
