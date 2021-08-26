module.exports = {
    name: "cajna",
    aliases: [],
    description: "cajna",
    usage: `cajna`,
    execute(message, args){
        message.channel.send({files: ["./images/cajna.jpg"]});
    }
}