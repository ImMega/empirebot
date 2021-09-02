const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: "reactrole1",
    description: " Sets up a react for role message",
    async execute(message, args, client) {
        const authorID = message.author.id
        const admins = authorID === "470277450551656459" || authorID === "409040454823444482" || authorID === "772213138132828171"

        if(admins && message.guild.id === `859163345642717216`)
        {
            message.delete();
        
            const channel = "859165049700352060";
            const role1 = message.guild.roles.cache.find(role => role.name === "straight");
            const role2 = message.guild.roles.cache.find(role => role.name === "Gay");
            const role3 = message.guild.roles.cache.find(role => role.name === "lesbian");
            const role4 = message.guild.roles.cache.find(role => role.name === "Pansexual");
            const role5 = message.guild.roles.cache.find(role => role.name === "Bisexual");
            const role6 = message.guild.roles.cache.find(role => role.name === "Non Binary");

            const roleEmoji1 = `⚪`;
            const roleEmoji2 = `🟥`;
            const roleEmoji3 = `🟤`;
            const roleEmoji4 = `🟠`;
            const roleEmoji5 = `🟢`;
            const roleEmoji6 = `🔹`;

            let embed = new MessageEmbed()
                .setColor(`#e42643`)
                .setTitle(`Koji si sexuality`)
                .setDescription(`${roleEmoji1} straight\n`
                    + `${roleEmoji2} gay\n`
                    + `${roleEmoji3} lesbian\n`
                    + `${roleEmoji4} pansexual\n`
                    + `${roleEmoji5} bisexual\n`
                    + `${roleEmoji6} non binary`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(roleEmoji1);
            messageEmbed.react(roleEmoji2);
            messageEmbed.react(roleEmoji3);
            messageEmbed.react(roleEmoji4);
            messageEmbed.react(roleEmoji5);
            messageEmbed.react(roleEmoji6);

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
                    if (reaction.emoji.name === roleEmoji5) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role5);
                    }
                    if (reaction.emoji.name === roleEmoji6) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(role6);
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
                    if (reaction.emoji.name === roleEmoji5) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role5);
                    }
                    if (reaction.emoji.name === roleEmoji6) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(role6);
                    }
                } else {
                    return;
                }
            });
        }
    }
}