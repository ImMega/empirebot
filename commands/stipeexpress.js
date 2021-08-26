module.exports = {
    name: "stipeexpress",
    aliases: [],
    description: "stipe express goes brrrr",
    usage: `stipeexpress`,
    execute(message, args){
        message.channel.send({files: ["./images/stipeexpress.png"]});
    }
}