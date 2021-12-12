module.exports = {
    name: `klaric3`,
    aliases: [],
    description: `jos jedan vrlo accurate video`,
    usage: `klaric3`,
    execute(message){
        message.channel.send({ files: ["./videos/Inferno_lol.mp4"] });
    }
}