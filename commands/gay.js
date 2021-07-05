module.exports = {
    name: "gay", 
    description: "Koliki si gay" ,
    execute(message, args){
        const target = message.mentions.users.first()

        const simp = Math.floor(Math.random() * 100)

        if (!target){
            message.reply('ti si ' + `${simp}` + '% gay!');
        } else if (target){
            message.channel.send(`${target}` + " je " + `${simp}` + '% gay!');
        }
    }
}