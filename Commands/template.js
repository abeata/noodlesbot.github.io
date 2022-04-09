module.exports.run = async (client, message, args) => {
    message.channel.send("This is the template command and will be only executable by the noodlesking")
}

module.exports.help = {
    name: "template"
}