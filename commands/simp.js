module.exports = {
    name: "simp", 
    aliases: [],
    description: "Koliki si simp" ,
    usage: `simp [target]`,
    execute(message, args){
        const target = message.mentions.users.first()

        const simp = Math.floor(Math.random() * 100)

        if (!target){
            message.reply('Ti si ' + `${simp}` + '% simp!');
        } else if (target){
            message.channel.send(`${target}` + " je " + `${simp}` + '% simp!');
        }
    }
}