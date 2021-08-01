module.exports = {
    name: "stipesus",
    description: "when stipe sus",
    execute(message, args){
        message.channel.send({files: ["./images/stipesus.png"]});
    }
}