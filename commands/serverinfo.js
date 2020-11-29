const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const ServerinfoEmbed = new Discord.MessageEmbed()
    .setColor(0xdf1c1c)
    .setTitle('📖 Server info of ' + message.guild.name)
    .addField('◻ Server Owner-' , '▶ ' + message.guild.owner.user.username)
    .addField('◻ Owner Id-' , '▶ ' + message.guild.ownerID)
    .addField('◻ Server Id-' , '▶ ' + message.guild.id)
    .addField('◻ Region-' , '▶ ' + message.guild.region)
    .addField('◻ Total Roles-' , '▶ ' + message.guild.roles.cache.size)
    .addField('◻ Total channels and categories-' , '▶ ' + message.guild.channels.cache.size)
    .addField('◻ Server Afk channel-' , '▶ #' +  message.guild.afkChannel)
    .addField('◻ Afk Timeout-' , '▶ ' + message.guild.afkTimeout / 60 + 'mins')
    .addField('◻ Verification Level-' , '▶ ' + message.guild.verificationLevel) 
    .addField('◻ System Message channel-' , '▶ #' +  message.guild.systemChannel )
    .addField('◻ Default Message Notification-' , '▶ ' + message.guild.defaultMessageNotifications)
    .addField('◻ Total Members-' , '▶ ' + message.guild.memberCount + 'members')
    .addField('◻ Server Created-' , '▶ ' + message.guild.createdAt)
    .setThumbnail(message.guild.iconURL())
                
    
    message.channel.send(ServerinfoEmbed)


}

module.exports.help ={
    name: "serverinfo",
    aliases: []
}
