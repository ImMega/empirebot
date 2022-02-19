const { MessageEmbed } = require("discord.js");

module.exports = (queue, song) => {
    if(queue.songs.length === 1) return;

    queue.textChannel.send({
        embeds: [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(song.user.id).displayHexColor)
            .setTitle(`Dodano u Queue`)
            .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
            .setThumbnail(song.thumbnail)
            .setFooter({ text: song.user.tag, iconURL: song.user.displayAvatarURL({ dynamic: true })})
        ]
    })
}