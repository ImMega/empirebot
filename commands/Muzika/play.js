const player = require("../../main").player;

module.exports = {
    name: `play`,
    aliases: [`p`],
    description: `Pusta pjesmu`,
    usage: `play <pjesma ili playlist>`,
    async execute(message, args){
        if(!message.member.voice.channel) return message.reply({
            content: `Nisi cak ni u VC a zelis da pustam pjesme?`,
            allowedMentions: {
                repliedUser: false
            }
        });

        const queue = player.getQueue(message);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply({
            content: `Moras biti u istom VC kao i ja!`,
            allowedMentions: {
                repliedUser: false
            }
        });

        if(!message.guild.me.voice.channel) player.voices.join(message.member.voice.channel);

        player.play(message, args.join(" "));
    }
}