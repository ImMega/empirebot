const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "help", 
    aliases: [],
    description: "Pokazuje ostale komande",
    usage: `help [komanda]`,
    execute(message, args, client){
        const authorID = message.author.id
        const admins = authorID === "470277450551656459" || authorID === "409040454823444482" || authorID === "772213138132828171"

        const cmds = client.commands.map(v => `\`${v.name}\``).join(` • `);
        const pCmds = client.private.map(v => `\`${v.name}\``).join(` • `);
        const musiCmds = client.music.map(v => `\`${v.name}\``).join(` • `);
        

        if(!args[0]) {
            const helpEmbed = new MessageEmbed()
                    .setColor(0x4bf542)
                    .setTitle(`${client.user.username}` + " Commands List")
                    .setDescription(`Prefix: **${client.prefix}**`)
                    .addField(`Komande`, cmds)
                    .addField(`Music`, musiCmds)
                    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`${client.user.username}` + " Commands")
                    .setTimestamp()
                message.channel.send({ embeds: [helpEmbed] });
        }
        
        if(args[0] === "admin" && admins) {
            const adminHelp = new MessageEmbed()
                .setColor(0x4bf542)
                .setTitle(`${client.user.username}` + " Admin Commands List")
                .setDescription(`Prefix: **${client.prefix}**\n`
                                + ` \n`
                                + `${pCmds}`)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${client.user.username}` + " Admin Commands")
                .setTimestamp()
            message.channel.send({ embeds: [adminHelp] });
        } else if(args[0]){
            const cmdF = client.commands.get(args[0]) || client.commands.get(client.cmdA.get(args[0]))
            const musicF = client.music.get(args[0]) || client.music.get(client.musicA.get(args[0]))

            if(!cmdF && !musicF) return message.reply(`Ta komanda ne postoji!`);

            function helpCmd(cmd){
                if(cmd.aliases.length === 0){
                    exeHelp(cmd);
                } else {
                    let aliases = 1;
                    exeHelp(cmd, aliases);
                }

                function exeHelp(cmd, aliases){
                    const helpEmbed = new MessageEmbed()
                    .setColor(0x4bf542)
                    .setTitle(client.prefix + cmd.name)
                    .setDescription(`${cmd.description}\n\n\`<...>\` - potrebno\n\`[...]\` - nije potrebno ali kako os\n\n`
                                    +`${aliases ? `**Aliases:** \`${cmd.aliases.join(`, `)}\`\n\n` : ` `}`
                                    +`**Usage**\n\`${cmd.usage}\`\n\n` 
                                    +`${cmd.details ? `**Details**\n ${cmd.details}\n\n` : ` `}`)
    
                    message.channel.send({ embeds: [helpEmbed] });
                }
            }
            
            if(cmdF){
                const cmd = cmdF;

                helpCmd(cmd);
            } else if(musicF){
                const cmd = musicF;

                helpCmd(cmd);
            }
        }
    }
}