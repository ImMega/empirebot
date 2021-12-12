module.exports = {
    name: "klaric2",
    aliases: [],
    description: "accurate video klarica",
    usage: `klaric2`,
    execute(message){
        message.channel.send({files: ["./videos/Fire.EXE.mp4"]});
    }
}