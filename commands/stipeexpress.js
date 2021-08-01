module.exports = {
    name: "stipeexpress",
    description: "stipe express goes brrrr",
    execute(message, args){
        message.channel.send({files: ["./images/stipeexpress.png"]});
    }
}