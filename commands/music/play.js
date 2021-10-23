const player = require("../../main").player;

module.exports = {
    name: `play`,
    aliases: [`p`],
    description: `Pusta pjesmu`,
    usage: `play <pjesma ili playlist>`,
    async execute(message, args){
        if(!message.member.voice.channel) return message.reply(`Nisi cak ni u VC a zelis da pustam pjesme?`);

        const queue = player.getQueue(message);

        if(queue && message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);

        player.play(message, args.join(" "));
    }
}