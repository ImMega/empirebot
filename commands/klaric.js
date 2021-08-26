module.exports = {
    name: "klaric",
    aliases: [],
    description: "accurate slika klarica",
    usage: `klaric`,
    execute(message, args){
        message.channel.send({files: ["./images/nutella.png"]});
    }
}