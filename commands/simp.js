module.exports = {
    name: "simp", 
    description: "Koliki si simp" ,
    execute(message, args){
        const target = message.mentions.users.first()

        const simp = Math.floor(Math.random() * 100)

        if (!target){
            message.reply('ti si ' + `${simp}` + '% simp!');
        } else if (target){
            message.channel.send(`${target}` + " je " + `${simp}` + '% simp!');
        }
    }
}