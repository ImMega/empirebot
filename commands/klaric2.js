module.exports = {
    name: "klaric2",
    aliases: [],
    description: "accurate video klarica",
    usage: `amigo`,
    execute(message, args){
        message.channel.send({files: ["./videos/Fire.EXE.mp4"]});
    }
}