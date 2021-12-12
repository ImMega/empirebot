const { MessageEmbed } = require(`discord.js`);
const { client } = require("../../main");

module.exports = {
    name: "help", 
    aliases: [],
    description: "Pokazuje ostale komande",
    usage: `help [komanda]`,
    async execute(message, args){
        if(!args[0]){
            const embed = new MessageEmbed()
                .setColor(message.guild.members.cache.get(client.user.id).displayHexColor)
                .setTitle(`${client.user.username} Command List`)
                .setDescription(`Da vidis info o nekoj komandi ukucaj \`${client.prefix}help [komanda]\`\n\nAko je nes sjebano ping ili DM <@470277450551656459>`)
                .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
                .setFooter(`${client.user.username} Command List`, client.user.displayAvatarURL({ dynamic: true }))

            await client.categories.map(c => embed.addField(c.name, c.cmds.map(v => `\`${v}\``).join(` • `)));

            message.channel.send({ embeds: [embed] })
        } else {
            const cmd = client.commands.get(args[0]) || client.commands.get(client.cmdA.get(args[0]));

            if(!cmd) return message.reply({ content: "Ta komanda ne postoji!", allowedMentions: { repliedUser: false } });

            message.channel.send({
                embeds: [
                    new MessageEmbed()
                        .setColor(message.guild.members.cache.get(client.user.id).displayHexColor)
                        .setTitle(client.prefix + cmd.name)
                        .setDescription(`${cmd.description}\n\n`
                        + `${cmd.aliases.length !== 0 ? `**Aliases:** \`${cmd.aliases.join(", ")}\`\n\n` : ` `}`
                        + `**Usage**\n\`${cmd.usage}\`\n\n`
                        + `${cmd.details ? `**Details**\n ${cmd.details}\n\n` : ` `}`
                        + `${cmd.permissions ? `**Permissions:** \`${cmd.permissions.join(", ")}\`` : ``}`)
                ]
            })
        }
    }
}