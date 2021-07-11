module.exports = {
    name: "grill",
    description: "grill",
    execute(message, args){
        message.channel.send({files: ["./images/grill.png"]});
    }
}