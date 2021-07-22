module.exports = {
    name: "reactroleon",
    execute(message, args, Discord, client){
        client.guilds.get('859163345642717216').channels.get('859165049700352060').fetchMessage(`861665578564190240`);
        client.guilds.get('859163345642717216').channels.get('859165049700352060').fetchMessage(`861665610138910771`);
        client.guilds.get('859163345642717216').channels.get('859165049700352060').fetchMessage(`861665618603016203`);
        client.guilds.get('859163345642717216').channels.get('859165049700352060').fetchMessage(`861665630360567820`);

        const channel = "859165049700352060";
        const maleRole = message.guild.roles.cache.find(role => role.name === "male");
        const femaleRole = message.guild.roles.cache.find(role => role.name === "female");
        const straightRole = message.guild.roles.cache.find(role => role.name === "straight");
        const gayRole = message.guild.roles.cache.find(role => role.name === "Gay");
        const lesbRole = message.guild.roles.cache.find(role => role.name === "lesbian");
        const panRole = message.guild.roles.cache.find(role => role.name === "Pansexual");
        const biRole = message.guild.roles.cache.find(role => role.name === "Bisexual");
        const nonbiRole = message.guild.roles.cache.find(role => role.name === "Non Binary");
        const age1Role = message.guild.roles.cache.find(role => role.name === "10-12");
        const age2Role = message.guild.roles.cache.find(role => role.name === "12-14");
        const age3Role = message.guild.roles.cache.find(role => role.name === "14-16");
        const age4Role = message.guild.roles.cache.find(role => role.name === "16+");
        const footbRole = message.guild.roles.cache.find(role => role.name === "Football");
        const baskbRole = message.guild.roles.cache.find(role => role.name === "Basketball");
        const sailRole = message.guild.roles.cache.find(role => role.name === "Sailing");

        const maleEmoji = `🔵`;
        const femaleEmoji = `🔴`;
        const straightEmoji = `⚪`;
        const gayEmoji = `🟥`;
        const lesbEmoji = `🟤`;
        const panEmoji = `🟠`;
        const biEmoji = `🟢`;
        const nonbiEmoji = `🔹`;
        const age1Emoji = `🗒️`;
        const age2Emoji = `🗓️`;
        const age3Emoji = `📆`;
        const age4Emoji = `📃`;
        const footbEmoji = `⚽`;
        const baskbEmoji = `🏀`;
        const sailEmoji = `⛵`;

        client.on("messageReactionAdd", async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === maleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(maleRole);
                }
                if (reaction.emoji.name === femaleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(femaleRole);
                }
                if (reaction.emoji.name === straightEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(straightRole);
                }
                if (reaction.emoji.name === gayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(gayRole);
                }
                if (reaction.emoji.name === lesbEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(lesbRole);
                }
                if (reaction.emoji.name === panEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(panRole);
                }
                if (reaction.emoji.name === biEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(biRole);
                }
                if (reaction.emoji.name === nonbiEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(nonbiRole);
                }
                if (reaction.emoji.name === age1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age1Role);
                }
                if (reaction.emoji.name === age2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age2Role);
                }
                if (reaction.emoji.name === age3Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age3Role);
                }
                if (reaction.emoji.name === age4Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(age4Role);
                }
                if (reaction.emoji.name === footbEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(footbRole);
                }
                if (reaction.emoji.name === baskbEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(baskbRole);
                }
                if (reaction.emoji.name === sailEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(sailRole);
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
                if (reaction.emoji.name === maleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(maleRole);
                }
                if (reaction.emoji.name === femaleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(femaleRole);
                }
                if (reaction.emoji.name === straightEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(straightRole);
                }
                if (reaction.emoji.name === gayEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(gayRole);
                }
                if (reaction.emoji.name === lesbEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(lesbRole);
                }
                if (reaction.emoji.name === panEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(panRole);
                }
                if (reaction.emoji.name === biEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(biRole);
                }
                if (reaction.emoji.name === nonbiEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(nonbiRole);
                }
                if (reaction.emoji.name === age1Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age1Role);
                }
                if (reaction.emoji.name === age2Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age2Role);
                }
                if (reaction.emoji.name === age3Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age3Role);
                }
                if (reaction.emoji.name === age4Emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(age4Role);
                }
                if (reaction.emoji.name === footbEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(footbRole);
                }
                if (reaction.emoji.name === baskbEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(baskbRole);
                }
                if (reaction.emoji.name === sailEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(sailRole);
                }
            } else {
                return;
            }
        });
    }
}