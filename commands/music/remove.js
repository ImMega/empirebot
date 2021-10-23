const { MessageEmbed } = require(`discord.js`);
const { player, client } = require("../../main");

module.exports = {
    name: `remove`,
    aliases: [`r`],
    description: `Mice pjesmu s queuea`,
    usage: `remove <id>`,
    details: `\`id\` - redni broj pjesme u queue`,
    async execute(message, args){
        if(!message.member.voice.channel) return message.reply({
            content: `Trebas biti u VC samnom da bi to napravio...`,
            allowedMentions: {
                repliedUser: false
            }
        });

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply({
            content: `Moras biti u istom VC kao i ja!`,
            allowedMentions: {
                repliedUser: false
            }
        });
        
        const queue = player.getQueue(message);

        if(!queue) return message.reply({
            content: "Nista se ne pusta",
            allowedMentions: {
                repliedUser: false
            }
        });

        const musicQ = queue.songs;
        const index = args[0];

        if(isNaN(index)) return message.reply({
            content: "Moras upisat redni broj pjesme u queueu",
            allowedMentions: {
                repliedUser: false
            }
        });
        if(index < 1) return message.reply({
            content: "Malo premal broj",
            allowedMentions: {
                repliedUser: false
            }
        });
        if(index > musicQ.length) return message.reply({
            content: "Nema pjesme sa tim rednim brojem",
            allowedMentions: {
                repliedUser: false
            }
        });

        const song = musicQ.splice(index - 1, 1)[0];

        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setColor(message.channel.guild.members.cache.get(message.author.id).displayHexColor)
                .setTitle("Maknuto iz Queuea")
                .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setThumbnail(song.thumbnail)
            ]
        });
    }
}