const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `volume`,
    aliases: [`v`],
    description: `Stavi glasnocu`,
    usage: `volume <volume>`,
    details: `\`volume\` - izmedu 0 i 100`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        if(isNaN(args[0])) return message.reply(`Moras unijeti pravi broj!`);

        const volumeInt = args[0];

        if(volumeInt < 0) return message.reply(`Nije ni moguce da bude manje od nule tf...`);
        if(volumeInt > 100) return message.reply(`Nah, to je pre glasno`);

        queue.setVolume(volumeInt);
        const embed = new MessageEmbed()
        .setColor(0x4bf542)
        .setDescription(`Volume set to **${volumeInt}**%`)
        message.channel.send({ embeds: [embed] });
    }
}