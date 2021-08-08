module.exports = {
    name: "help", 
    description: "Pokazuje ostale komande",
    execute(message, args, Discord, client){
        const authorID = message.author.id
        const admins = authorID === "470277450551656459" || authorID === "409040454823444482" || authorID === "772213138132828171"

        const cmds = client.commands.map(v => `\`${v.name}\``).join(`\n`);
        const pCmds = client.private.map(v => `\`${v.name}\``).join(`\n`);
        

        if(!args[0]) {
            const helpEmbed = new Discord.MessageEmbed()
                    .setColor(0x4bf542)
                    .setTitle(`${client.user.username}` + " Commands List")
                    .setDescription(`**Bot je jos u developmentu doci ce jos komandi**\n`
                                    + `Prefix: **e!**\n`
                                    + `${cmds}`)
                    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                    .setFooter(`${client.user.username}` + " Commands")
                    .setTimestamp()
                message.channel.send(helpEmbed);
        }
        
        if(args[0] === "admin" && admins) {
            const adminHelp = new Discord.MessageEmbed()
                .setColor(0x4bf542)
                .setTitle(`${client.user.username}` + " Admin Commands List")
                .setDescription(`Prefix: **e!**\n`
                                + ` \n`
                                + `${pCmds}`)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${client.user.username}` + " Admin Commands")
                .setTimestamp()
            message.channel.send(adminHelp);
        }
    }
}