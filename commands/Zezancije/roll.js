const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "roll",
    aliases: [],
    description: "Rolls the dice",
    usage: "roll <roll number>",
    execute(message, args){
        if(args[0].includes("d")){
            const dices = args[0].split("d")[0];
            const dice = args[0].split("d")[1];

            const rolls = [];
            let roll = 0;

            for(i = 0; i < dices || (dices == "" && i < 1); i++){
                const rolled = Math.floor(Math.random() * dice) + 1;

                rolls.push(rolled);
                roll += rolled;
            }

            message.reply({ embeds: [
                new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setTitle(roll.toString())
                .setDescription("(" + rolls.join(" + ") + ")")
                .setFooter({ text: `${message.member.displayName} rolled ${args[0]}`, iconURL: message.member.displayAvatarURL({ dynamic: true }) })
            ], allowedMentions: { repliedUser: false } });
        }
        else
        {
            const roll = Math.floor(Math.random() * args[0]) + 1;

            message.reply({ embeds: [
                new MessageEmbed()
                .setColor(message.guild.me.displayHexColor)
                .setTitle(roll.toString())
                .setFooter({ text: `${message.member.displayName} rolled ${args[0]}`, iconURL: message.member.displayAvatarURL({ dynamic: true }) })
            ], allowedMentions: { repliedUser: false } });
        }
    }
}