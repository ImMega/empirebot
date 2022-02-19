const { player, client } = require("../../main");
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `volume`,
    aliases: [`v`],
    description: `Stavi glasnocu`,
    usage: `volume <volume>`,
    details: `\`volume\` - izmedu 0 i 100`,
    execute(message, args, client){
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
        
        let queue = player.getQueue(message);

        if(!queue) return message.reply({
            content: "Nista se ne pusta",
            allowedMentions: {
                repliedUser: false
            }
        });

        if(isNaN(args[0])) return;
        const volume = parseInt(args[0]);

        if(volume < 0) return message.reply({
            content: "To se ni ne moze napravit",
            allowedMentions: {
                repliedUser: false
            }
        });
        if(volume > 100) return message.reply({
            content: "To je malo preglasno",
            allowedMentions: {
                repliedUser: false
            }
        });

        queue.setVolume(volume);

        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setColor(message.channel.guild.members.cache.get(message.author.id).displayHexColor)
                .setTitle("Glasnoca Promijenjena")
                .setDescription(`Glasnoca stavljena na ${volume}%`)
                .setFooter({ text: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            ]
        });
    }
}