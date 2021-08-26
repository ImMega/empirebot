const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `remove`,
    aliases: [],
    description: `Mice pjesmu s queuea`,
    usage: `remove <naslov ili id>`,
    details: `\`naslov\` - naslov pjesme\n`
            +`\`id\` - redni broj pjesme u queue`,
    async execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        let songID;

        if(isNaN(args.join(` `))) songID = args.join(` `);
        if(!isNaN(args.join(` `))) songID = parseInt(args[0]) - 2; 

        if(songID === -1) return;

        const track = await queue.remove(songID);

        const embed = new MessageEmbed()
        .setColor(0x4bf542)
        .setDescription(`Maknut [${track.title}](${track.url}) iz queuea`)

        message.channel.send({ embeds: [embed] });
    }
}