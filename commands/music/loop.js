const { MessageEmbed } = require(`discord.js`);
const { player, client } = require("../../main");

module.exports = {
    name: `loop`,
    aliases: [`repeat`],
    description: `Loopa queue ili pjesmu`,
    usage: `loop [mode]`,
    details: `\`mode\` - loop mode (\`song, queue, off\`)`,
    execute(message, args){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);

        const queue = player.getQueue(message);

        if(!queue) return message.reply({
            content: "Nista se ne pusta",
            allowedMentions: {
                repliedUser: false
            }
        });

        let mode;
        switch (args[0]) {
            case "off" || 0:
                mode = 0
                break
            case "song":
                mode = 1
                break
            case "queue":
                mode = 2
                break
        }

        mode = queue.setRepeatMode(mode);
        mode = mode ? mode === 2 ? "queue" : "song" : "off";
        message.channel.send({
            embeds: [
                new MessageEmbed()
                .setColor(message.guild.members.cache.get(message.author.id).displayHexColor)
                .setDescription(`Queue loop mode stavljen na: \`${mode}\``)
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            ]
        });
    }
}