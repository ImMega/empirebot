module.exports = {
    name: "klaric2",
    description: "accurate video klarica",
    execute(message, args){
        message.channel.send({files: ["./videos/Fire.EXE.mp4"]});
    }
}