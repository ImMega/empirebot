module.exports = {
    name: `skip`,
    aliases: [],
    description: `Preskoci trenutnu pjesmu`,
    usage: `skip`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        queue.skip();

        message.react(`✅`);
    }
}