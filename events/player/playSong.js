const { MessageEmbed } = require("discord.js");
const { client } = require("../../main");

module.exports = (queue, song) => {
    if(queue.playingMsg) queue.playingMsg.delete();

    queue.textChannel.send({
        embeds:
        [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(client.user.id).displayHexColor)
            .setTitle("Now Playing")
            .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
            .setFooter({ text: song.user.tag, iconURL: song.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(song.thumbnail)
        ]
    }).then(msg => {
        queue.playingMsg = msg;
    })
}