const { Client, Intents } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})

client.once("ready", () => {
    console.log(`${client.user.username} is online.`)
    client.user.setActivity("Testing", {type: "PLAYING"})
})

client.on("messageCreate", message => {
    if(message.author.bot) return;

    var prefix = "!";
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    if(command = prefix + "test") return message.channel.send("testing command is working.");
})

client.login(process.env.TOKEN);