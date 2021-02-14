# Starterbot by Kristab </>#1070
Are you new to coding in discord.js ? 
Then this will help you to start your journey.

> **Made by [@KristabBhattarai](https://github.com/KristabBhattarai/)**

> **Invite my bot : [Order It](https://orderit.ga/invite.html)**

For any support of this code Join our discord server.
**Server link: https://discord.gg/EZDfrer**

# Things you need to do:
> 1. Put your own bot token in botconfig.json
> 2. To add any new command you can duplicate any file inside commands folder and rename it to your command name.
> 3. To start coding inside the new .js/command file you made, You can copy any command code and paste it there and edit it.
> 4. All done. For more help and command join our Discord server: https://discord.gg/EZDfrer



**botconfig.json **

```js
{
    "token": "Your bot token",
    "prefix": "prefix for your bot"
}
```

# To create new commands
Copy and paste below code after creating new .js file inside commands folder!!

```js
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    //Your codes here

}

module.exports.help ={
    name: "command name", //Don't left this empty or same name as other command
    aliases: []
}
```
