module.exports = {
    name: "jebanje",
    aliases: [],
    description: "cipikao je na putu da ti jebe mater",
    usage: `jebanje`,
    execute(message, args){
        message.channel.send({files: ["./videos/cipikao.mp4"]});
    }
}