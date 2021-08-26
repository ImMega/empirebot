module.exports = {
    name: "teletabis",
    aliases: [],
    description: "teletabis",
    usage: `teletabis`,
    execute(message, args){
        message.channel.send({files: ["./images/teletabis.png"]});
    }
}