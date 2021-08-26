const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `nowplaying`,
    aliases: [`np`],
    description: `Prikaze trenutnu pjesmu`,
    usage: `nowplaying`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        const embed = new MessageEmbed()
        .setColor(0x4bf542)

        let nowPlaying = queue.nowPlaying();

        if(!nowPlaying) return message.channel.send(`Nista se ne pusta!`);

        embed
        .setDescription(`[${nowPlaying.title}](${nowPlaying.url}) (${nowPlaying.requestedBy})\n` + queue.createProgressBar())
        .setThumbnail(nowPlaying.thumbnail)

        message.channel.send({ embeds: [embed] });
    }
}