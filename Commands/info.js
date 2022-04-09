const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var Embed = new discord.MessageEmbed()
        .setTitle("hello")
    message.channel.send({ embeds: [Embed]});
}

module.exports.help = {
    name: "info"
}