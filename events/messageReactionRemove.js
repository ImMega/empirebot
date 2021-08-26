module.exports = {
    name: `messageReactionRemove`,
    async execute(reaction, user){
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
        
        const { message, emoji } = reaction;

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
    
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
    
        if(message.id === `861665578564190240`){
            if(emoji.name === maleEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(maleRole);
            }
            if (emoji.name === femaleEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(femaleRole);
            }
        }
        
        if(message.id === `861665610138910771`){
            if(emoji.name === straightEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(straightRole);
            }
            if (emoji.name === gayEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(gayRole);
            }
            if(emoji.name === lesbEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(lesbRole);
            }
            if (emoji.name === panEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(panRole);
            }
            if(emoji.name === biEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(biRole);
            }
            if (emoji.name === nonbiEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(nonbiRole);
            }
        }
    
        if(message.id === `861665618603016203`){
            if(emoji.name === age1Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age1Role);
            }
            if (emoji.name === age2Emoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age2Role);
            }
            if(emoji.name === age3Emoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age3Role);
            }
            if (emoji.name === age4Emoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(age4Role);
            }
        }
    
        if(message.id === `861665630360567820`){
            if(emoji.name === footbEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(footbRole);
            }
            if (emoji.name === baskbEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(baskbRole);
            }
            if(emoji.name === sailEmoji){
                await reaction.message.guild.members.cache.get(user.id).roles.remove(sailRole);
            }
        }
    }
}