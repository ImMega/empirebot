module.exports = {
    name: "reactrole2",
    description: " Sets up a react for role message",
    async execute(message, args, Discord, client) {
        const authorID = message.author.id
        const admins = authorID === "470277450551656459" || authorID === "409040454823444482" || authorID === "772213138132828171"

        if(admins)
        {
            message.delete();
        
            const channel = "859165049700352060";
            const role1 = message.guild.roles.cache.find(role => role.name === "10-12");
            const role2 = message.guild.roles.cache.find(role => role.name === "12-14");
            const role3 = message.guild.roles.cache.find(role => role.name === "14-16");
            const role4 = message.guild.roles.cache.find(role => role.name === "16+");

            const roleEmoji1 = `🗒️`;
            const roleEmoji2 = `🗓️`;
            const roleEmoji3 = `📆`;
            const roleEmoji4 = `📃`;

            let embed = new Discord.MessageEmbed()
                .setColor(`#e42643`)
                .setTitle(`Koliko godina imas`)
                .setDescription(`${roleEmoji1} 10-12\n`
                    + `${roleEmoji2} 12-14\n`
                    + `${roleEmoji3} 14-16\n`
                    + `${roleEmoji4} 16+`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(roleEmoji1);
            messageEmbed.react(roleEmoji2);
            messageEmbed.react(roleEmoji3);
            messageEmbed.react(roleEmoji4);

            client.on("messageReactionAdd", async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === roleEmoji1) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role1);
                    }
                    if (reaction.emoji.name === roleEmoji2) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role2);
                    }
                    if (reaction.emoji.name === roleEmoji3) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role3);
                    }
                    if (reaction.emoji.name === roleEmoji4) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role4);
                    }
                } else {
                    return;
                }
            });

            client.on("messageReactionRemove", async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === roleEmoji1) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role1);
                    }
                    if (reaction.emoji.name === roleEmoji2) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role2);
                    }
                    if (reaction.emoji.name === roleEmoji3) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role3);
                    }
                    if (reaction.emoji.name === roleEmoji4) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role4);
                    }
                } else {
                    return;
                }
            });
        }
    }
}