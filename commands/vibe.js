const { MessageEmbed } = require("discord.js");
const { client } = require("../main");

module.exports = {
    name: "vibe",
    aliases: [],
    description: "Vibe oes brrr",
    usage: "vibe",
    execute(message, args){
        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setColor(message.guild.members.cache.get(client.user.id).displayHexColor)
                .setTitle(`${message.author.username} do be vibin doe`)
                .setImage("https://c.tenor.com/wEm5WYv5RtcAAAAC/karlson-vibe-dancing.gif")
            ]
        })
    }
}