module.exports = {
    name: "deda",
    aliases: [],
    description: "Moj deda kalemi visnju",
    usage: "deda",
    execute(message){
        message.channel.send({ files: ["./images/deda.jpg"] });
    }
}