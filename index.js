const {Client,Intents} = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.once("ready", () => {
    console.log("ready")
})
Client.login(process.env.TOKEN)