module.exports.run = async (bot, message, args) => {
    message.channel.send("Test command is working")
}

module.exports.help = {
    name: "test"
}