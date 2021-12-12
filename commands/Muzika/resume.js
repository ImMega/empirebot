const { player, client } = require("../../main");

module.exports = {
    name: `resume`,
    aliases: [],
    description: `Nastavi pauziranu pjesmu`,
    usage: `resume`,
    execute(message, args){
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

        if(!queue.paused) return message.reply({
            content: "Queue nije pauziran",
            allowedMentions: {
                repliedUser: false
            }
        })

        queue.resume();
        message.react(`⏯️`);
    }
}