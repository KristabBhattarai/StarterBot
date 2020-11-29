const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const BotinfoEmbed = new Discord.MessageEmbed()
    .setColor(0x236edf)
    .setTitle('[Bot name] info')
    .setDescription('[Detail]')
    .addField('Total Servers' , bot.guilds.cache.size + ' servers' )
    .addField('Total Members' , bot.users.cache.size + ' members' )
    .addField('Uptime' , bot.uptime + ' milliseconds')
    .addField('Developers' , ' O_O 👑🅺🆁🅸🆂🆃🅰🅱👑#5448')
    .setThumbnail('https://cdn.discordapp.com/attachments/742415705789431818/743779804704276530/order_it_new.png')

    message.channel.send(BotinfoEmbed)


}

module.exports.help ={
    name: "botinfo",
    aliases: []
}
