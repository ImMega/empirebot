module.exports = {
    name: "jebanje2",
    aliases: [],
    description: "cipikao ti je imao odnos s tvojom mamom",
    usage: `jebanje2`,
    execute(message, args){
        message.channel.send({files: ["./videos/cipikao2.mp4"]});
    }
}