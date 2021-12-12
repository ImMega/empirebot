const { player } = require("../../main");
const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: `queue`,
    aliases: [`q`],
    description: `Pokaze trenutni queue`,
    usage: `queue`,
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

        const songsRaw = queue.songs;

        const songs = songsRaw.map((e, i) => {
            return `[${i + 1}] ${e.name} - ${e.formattedDuration} ${i === 0 ? "--- [Now Playing]" : ""}`
        });

        message.channel.send(`\`\`\`ini\n${songs.slice(0, 8).join("\n")}\`\`\``)
        .then(async (msg) => {
            await msg.react("⏮️");
            await msg.react("⏭️");

            const collector = msg.createReactionCollector({ time: 60000 });

            collector.pages = -1;

            collector.on("collect", (reaction, user) => {
                if(user.id !== message.author.id) return; 

                if(reaction.emoji.name === "⏭️"){
                    reaction.users.remove(user);

                    collector.pages++;

                    const page = songs.slice(8 + (8 * collector.pages), 16 + (8 * collector.pages));

                    if(page.length === 0) return collector.pages--;;

                    msg.edit(`\`\`\`ini\n${page.join("\n")}\`\`\``);
                } else if(reaction.emoji.name === "⏮️"){
                    reaction.users.remove(user);

                    if(collector.pages === -1) return;

                    collector.pages--;

                    if(collector.pages === -1){
                        const page = songs.slice(0, 8);

                        msg.edit(`\`\`\`ini\n${page.join("\n")}\`\`\``);
                    } else {
                        const page = songs.slice(8 + (8 * collector.pages), 16 + (8 * collector.pages));

                        msg.edit(`\`\`\`ini\n${page.join("\n")}\`\`\``);
                    }
                }
            })
        })
    }
}