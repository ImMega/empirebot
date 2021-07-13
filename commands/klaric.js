module.exports = {
    name: "klaric",
    description: "accurate slika klarica",
    execute(message, args){
        message.channel.send({files: ["./images/nutella.png"]});
    }
}