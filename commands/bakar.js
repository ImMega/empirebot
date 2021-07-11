module.exports = {
    name: "bakar",
    description: "bakar",
    execute(message, args){
        message.channel.send({files: ["./images/bakar.png"]});
    }
}