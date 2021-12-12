const { MessageEmbed } = require("discord.js");

module.exports = (queue, list) => {
    if(list.source === "spotify") return queue.textChannel.send({
        embeds: [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(list.user.id).displayHexColor)
            .setTitle(`Playlist Dodan u Queue`)
            .setDescription(`Dodan Spotify playlist **${list.name}**`)
            .setThumbnail(list.thumbnail)
            .setFooter(list.user.tag, list.user.displayAvatarURL({ dynamic: true }))
        ]
    });

    queue.textChannel.send({
        embeds: [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(list.user.id).displayHexColor)
            .setTitle(`Playlist Dodan u Queue`)
            .setDescription(`Dodan ${list.source === "youtube" ? `YouTube` : `${list.source}`} playlist **${list.name}** sa **${list.songs.length}** pjesama`)
            .setThumbnail(list.thumbnail)
            .setFooter(list.user.tag, list.user.displayAvatarURL({ dynamic: true }))
        ]
    })
}