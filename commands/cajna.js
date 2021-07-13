module.exports = {
    name: "cajna",
    description: "cajna",
    execute(message, args){
        message.channel.send({files: ["./images/cajna.jpg"]});
    }
}