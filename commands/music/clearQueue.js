const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `clearqueue`,
    aliases: [`cq`, `clear`],
    description: `Makne sve pjesme iz queue`,
    usage: `clearqueue`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);
        
        if(!queue) return;

        queue.clear();

        const embed = new MessageEmbed()
        .setColor(0x4bf542)
        .setDescription(`Queue cleared`)
        message.channel.send({ embeds: [embed] });
    }
}