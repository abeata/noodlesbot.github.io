const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var Embed = new discord.MessageEmbed()
        .setTitle("hello")
    var SecondEmbed = new discord.MessageEmbed()
        .setTitle("goodbye")
    message.channel.send({ embeds: [Embed, SecondEmbed]});
}

module.exports.help = {
    name: "info"
}