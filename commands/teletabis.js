module.exports = {
    name: "teletabis",
    description: "teletabis",
    execute(message, args){
        message.channel.send({files: ["./images/teletabis.png"]});
    }
}