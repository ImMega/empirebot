module.exports = {
    name: "reactrole",
    description: " Sets up a react 4 role message",
    async execute(message, args, Discord, client) {
        const channel = "859820700390260736";
        const role1 = message.guild.roles.cache.find(role => role.name === "Role 1");
        const role2 = message.guild.roles.cache.find(role => role.name === "Role 2");

        const roleEmoji1 = `👍`;
        const roleEmoji2 = `👌`;

        let embed = new Discord.MessageEmbed()
            .setColor(`#e42643`)
            .setTitle(`Choose emoji for a role`)
            .setDescription(`${roleEmoji1} for "Role 1"\n`
                + `${roleEmoji2} for "Role 2"`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(roleEmoji1);
        messageEmbed.react(roleEmoji2);

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
            } else {
                return;
            }
        });
    }
}