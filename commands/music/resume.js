module.exports = {
    name: `resume`,
    aliases: [],
    description: `Nastavi pauziranu pjesmu`,
    usage: `resume`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        queue.setPaused(false);
        message.react(`⏯️`);
    }
}