module.exports = {
    name: "zvonko",
    aliases: [],
    description: "zvonko",
    usage: `zvonko`,
    execute(message, args){
        message.channel.send({files: ["./videos/zvonko.mp4"]});
    }
}