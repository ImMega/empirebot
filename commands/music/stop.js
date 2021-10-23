const { player, client } = require("../../main");
const { getVoiceConnection } = require("@discordjs/voice")

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

        const connection = getVoiceConnection(message.guild.id);

        if(!queue) return connection.disconnect();

        queue.stop();
        connection.disconnect();
        message.react(`🛑`);
    }
}