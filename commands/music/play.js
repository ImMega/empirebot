module.exports = {
    name: `play`,
    aliases: [`p`],
    description: `Pusta pjesmu`,
    usage: `play <song ili playlist>`,
    async execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Nisi cak ni u VC a zelis da pustam pjesme?`);

        let queueExist = client.player.getQueue(message.guild);

        if(queueExist && message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);

        const queue = client.player.createQueue(message.guild, {
            metadata: {
                channel: message.channel
            }
        });
    
        try {
            if(!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            queue.destroy();
            return await message.reply(`Ne mogu uci u tvoj channel!`)
        }
    
        client.player.search(args.join(` `), {
            requestedBy: message.author
        }).then(async (x) => {
            const nowPlaying = queue.nowPlaying();
            if(x.playlist){
                let tracks = x.playlist.tracks
                queue.addTracks(tracks)
                if(!nowPlaying){
                    queue.play();
                }
            } else {
                let track = x.tracks[0]
                if(!track) return await message.channel.send(`❌ | Track **${args.join(` `)}** not found!`);
                queue.addTrack(track)
                if(!nowPlaying){
                    queue.play();
                }
            }
        });
    }
}