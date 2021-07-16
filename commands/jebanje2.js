module.exports = {
    name: "jebanje2",
    description: "cipikao je na putu da ti jebe mater",
    execute(message, args){
        message.channel.send({files: ["./videos/cipikao2.mp4"]});
    }
}