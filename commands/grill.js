module.exports = {
    name: "grill",
    aliases: [],
    description: "grill",
    usage: `grill`,
    execute(message, args){
        message.channel.send({files: ["./images/grill.png"]});
    }
}