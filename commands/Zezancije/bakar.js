module.exports = {
    name: "bakar",
    aliases: [],
    description: "bakar",
    usage: `bakar`,
    execute(message, args){
        message.channel.send({files: ["./images/bakar.png"]});
    }
}

