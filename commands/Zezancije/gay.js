module.exports = {
    name: "gay", 
    aliases: [],
    description: "Koliki si gay" ,
    usage: `gay [target]`,
    execute(message, args){
        const target = message.mentions.users.first()

        const simp = Math.floor(Math.random() * 100)

        if (!target){
            message.reply('Ti si ' + `${simp}` + '% gay!');
        } else if (target){
            message.channel.send(`${target}` + " je " + `${simp}` + '% gay!');
        }
    }
}