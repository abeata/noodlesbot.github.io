const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var Embed = new discord.MessageEmbed()
    .setTitle("hello")
    message.channel.send(Embed)
}

module.exports.help = {
    name: "info"
}