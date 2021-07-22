module.exports = {
    name: "help", 
    description: "Pokazuje ostale komande",
    execute(message, args, Discord, client){
        const authorID = message.author.id
        const admins = authorID === "470277450551656459" || authorID === "409040454823444482" || authorID === "772213138132828171"


        if(!args[0]) {
            const helpEmbed = new Discord.MessageEmbed()
                    .setColor(0x4bf542)
                    .setTitle(`${client.user.username}` + " Commands List")
                    .setDescription(`**Bot je jos u developmentu doci ce jos komandi**\n`
                                    + `Prefix: **e!**\n`
                                    + ` \n`
                                    + `help\n`
                                    + `ping\n`
                                    + `yeet\n`
                                    + `kill\n`
                                    + `gay\n`
                                    + `ppsize\n`
                                    + `simp\n`
                                    + `grill\n`
                                    + `bakar\n`
                                    + `cajna\n`
                                    + `klaric\n`
                                    + `klaric2\n`
                                    + `jebanje\n`
                                    + `jebanje2\n`
                                    + `jebanje3\n`
                                    + `amigo\n`
                                    + `zvonko`)
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
                                + `msg ( e!msg <channel ID> <message> )`)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${client.user.username}` + " Admin Commands")
                .setTimestamp()
            message.channel.send(adminHelp);
        }
    }
}