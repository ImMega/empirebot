module.exports = {
    name: "stipesus",
    aliases: [],
    description: "when stipe sus",
    usage: `stipesus`,
    execute(message, args){
        message.channel.send({files: ["./images/stipesus.png"]});
    }
}