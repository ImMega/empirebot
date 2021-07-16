module.exports = {
    name: "jebanje",
    description: "cipikao je na putu da ti jebe mater",
    execute(message, args){
        message.channel.send({files: ["./videos/cipikao.mp4"]});
    }
}