const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `loop`,
    aliases: [`repeat`],
    description: `Loopa queue ili pjesmu`,
    usage: `loop <mode>`,
    details: `\`mode\` - loop mode (\`song, queue, off\`)`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);

        if(!args[0]) return message.reply(`A sto ce da loopa?`);

        const mode = args[0].toLowerCase();

        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        const embed = new MessageEmbed()
        .setColor(0x4bf542)

        if(mode === `song` || mode === `track` || mode === `2`){
            queue.setRepeatMode(1);
            embed.setDescription(`Sada loopa \`song\``)
            message.channel.send({ embeds: [embed] });
        }
        if(mode === `queue` || mode === `q` || mode === `list` || mode === `1`){
            queue.setRepeatMode(2);
            embed.setDescription(`Sada loopa \`queue\``)
            message.channel.send({ embeds: [embed] });
        }
        if(mode === `off` || mode === `0`){
            queue.setRepeatMode(0);
            embed.setDescription(`Loop je sad iskljucen`)
            message.channel.send({ embeds: [embed] });
        }
        if(!mode === `song` && !mode === `track` && !mode === `2` && !mode === `queue` && !mode === `q` && !mode === `list` && !mode === `1` && !mode === `off` && !mode === `0`) message.reply(`Moras unijeti pravilan loop mode!`);
    }
}