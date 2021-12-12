module.exports = {
    name: "jebanje3",
    aliases: [],
    description: "cipikao ima dijete s tvojom mamom",
    usage: `jebanje3`,
    execute(message, args){
        message.channel.send({files: ["./videos/cipikao3.mp4"]});
    }
}