module.exports.run = async (bot, message, args) => {
    message.channel.send("This is the template command and will be only executable by the noodlesking")
}

module.exports.help = {
    name: "template"
}