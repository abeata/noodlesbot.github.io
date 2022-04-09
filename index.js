const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.once("ready", () => {
    console.log(`${client.user.username} is online.`)
    client.user.setActivity("Testing", {type: "PLAYING"})
})
client.login(process.env.TOKEN)