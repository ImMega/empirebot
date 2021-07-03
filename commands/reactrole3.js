module.exports = {
    name: "reactrole3",
    description: " Sets up a react 4 role message",
    async execute(message, args, Discord, client) {
        message.delete();
        
        const channel = "859165049700352060";
        const role1 = message.guild.roles.cache.find(role => role.name === "Football");
        const role2 = message.guild.roles.cache.find(role => role.name === "Basketball");
        const role3 = message.guild.roles.cache.find(role => role.name === "Sailing");

        const roleEmoji1 = `⚽`;
        const roleEmoji2 = `🏀`;
        const roleEmoji3 = `⛵`;

        let embed = new Discord.MessageEmbed()
            .setColor(`#e42643`)
            .setTitle(`Koji sport te zanima`)
            .setDescription(`${roleEmoji1} nogomet"\n`
                + `${roleEmoji2} kosarka"\n`
                + `${roleEmoji3} jedrenje`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(roleEmoji1);
        messageEmbed.react(roleEmoji2);
        messageEmbed.react(roleEmoji3);

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
            } else {
                return;
            }
        });
    }
}