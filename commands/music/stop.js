const { player, client } = require("../../main");

module.exports = {
    name: `stop`,
    aliases: [],
    description: `Zaustavi queue`,
    usage: `stop`,
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

        if(!queue) return player.voices.leave(message);

        queue.stop();
        player.voices.leave(message);
        message.react(`🛑`);
    }
}