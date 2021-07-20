module.exports = {
    name: "jebanje3",
    description: "cipikao je na putu da ti jebe mater",
    execute(message, args){
        message.channel.send({files: ["./videos/cipikao3.mp4"]});
    }
}