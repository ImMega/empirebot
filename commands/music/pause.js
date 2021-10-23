const player = require("../../main").player

module.exports = {
    name: `pause`,
    aliases: [],
    description: `Pauzira trenutnu pjesmu`,
    usage: `pause`,
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

        if(queue.paused) return message.reply({
            content: "Queue je vec pauziran",
            allowedMentions: {
                repliedUser: false
            }
        });

        queue.pause();
        message.react(`⏸️`);
    }
}