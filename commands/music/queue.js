const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `queue`,
    aliases: [`q`],
    description: `Pokaze trenutni queue`,
    usage: `queue`,
    execute(message, args, client){
        if(!message.member.voice.channel) return message.reply(`Trebas biti u VC samnom da bi to napravio...`);

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.reply(`Moras biti u istom VC kao i ja!`);
        
        let queue = client.player.getQueue(message.guild);

        if(!queue) return;

        const authorID = message.author.id;

        let np = queue.nowPlaying();

        let q = queue.tracks.map((tracks, i) => {
            return `**${i+2})** [${tracks.title}](${tracks.url}) (${tracks.requestedBy})`
        }).slice(0, 9).join(`\n`) + `\n\n${queue.tracks.length > 9 ? `To i jos **${queue.tracks.length - 9}** drugih pjesama...` : ``}`

        const qEmbed = new MessageEmbed()
        .setColor(0x4bf542)
        .setDescription(`**- - - Trenutna Pjesma - - - **\n[${np.title}](${np.url}) (${np.requestedBy})\n**- - - - - - - - - - - - - - - - - - -**\n\n${q}`)
        .setFooter(`Page: 1`)

        let page = -1;
        const baseStart = 9;
        const baseEnd = 19;

        message.channel.send({ embeds: [qEmbed] }).then(async (msg) => {
            await msg.react("⏮️");
            await msg.react("⏭️");
            
            client.on("messageReactionAdd", (reaction, user) => {
                const { message, emoji } = reaction;

                if(message.id === msg.id && user.id === authorID){
                    if(emoji.name === "⏭️"){
                        page++;
                        reaction.users.remove(user.id);
                    
                        if(page > -1){
                            let timesTo = 10 * page;
                            const arrayStart = 9 + timesTo;
                            const arrayEnd = 19 + timesTo;
    
                            let qArray = queue.tracks.map(i => {return `${i}`}).slice(arrayStart, arrayEnd)
        
                            let q = queue.tracks.map((tracks, i) => {
                                return `**${i+2})** [${tracks.title}](${tracks.url}) (${tracks.requestedBy})`
                            }).slice(arrayStart, arrayEnd).join(`\n`) + `\n\n${queue.tracks.length > 9 ? `To i jos **${queue.tracks.length - qArray.length + 1}** drugih pjesama...` : ``}`
                            
                            qEmbed.setDescription(`${q}`).setFooter(`Page: ${page + 2}`)
        
                            msg.edit({ embeds: [qEmbed] });}
                    }
                    if(emoji.name === "⏮️"){
                        reaction.users.remove(user.id);
                    
                        if(page === -1) return;
                        page--;
                        if(page > -1){
                            let timesTo = 10 * page;
                            const arrayStart = 9 + timesTo;
                            const arrayEnd = 19 + timesTo;
    
                            let qArray = queue.tracks.map(i => {return `${i}`}).slice(arrayStart, arrayEnd)
        
                            let q = queue.tracks.map((tracks, i) => {
                                return `**${i+2})** [${tracks.title}](${tracks.url}) (${tracks.requestedBy})`
                            }).slice(arrayStart, arrayEnd).join(`\n`) + `\n\n${queue.tracks.length > 9 ? `To i jos **${queue.tracks.length - qArray.length + 1}** drugih pjesama...` : ``}`
                            
                            qEmbed.setDescription(`${q}`).setFooter(`Page: ${page + 2}`)
        
                            msg.edit({ embeds: [qEmbed] });}
                        if(page === -1){
                            let q = queue.tracks.map((tracks, i) => {
                                return `**${i+2})** [${tracks.title}](${tracks.url}) (${tracks.requestedBy})`
                            }).slice(0, 9).join(`\n`) + `\n\n${queue.tracks.length > 9 ? `To i jos **${queue.tracks.length - 9}** drugih pjesama...` : ``}`

                            qEmbed.setDescription(`**- - - Trenutna Pjesma - - - **\n[${np.title}](${np.url}) (${np.requestedBy})\n**- - - - - - - - - - - - - - - - -**\n\n${q}`)
                            .setFooter(`Page: 1`)
                            msg.edit({ embeds: [qEmbed] });
                        }
                    }
                }
            })
        })
    }
}