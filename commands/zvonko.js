module.exports = {
    name: "zvonko",
    description: "zvonko",
    execute(message, args){
        message.channel.send({files: ["./videos/zvonko.mp4"]});
    }
}