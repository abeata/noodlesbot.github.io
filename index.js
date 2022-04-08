const Discord = require("discord.js")
const Client = new Discord.Client()

Client.on("ready", () => {
    console.log("hci")
})

Client.login(secrets.TOKEN)