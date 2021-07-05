module.exports = {
    name: "kill", 
    description: "Ubi nekoga (ne za stvarno)" ,
    execute(message, args){
        const target = message.mentions.users.first()
        const author = message.author

        number = 4;
        killWay = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (killWay === 1){
            if (target === author){
                message.channel.send(`${author}` + " se ubio")
            } else if (target){
                message.channel.send(`${author}` + " je ubio " + `${target}`)
            } else if (!target){
                message.reply("koga ces ubiti?")
            } 
        } else if (killWay === 2){
            if (target === author){
                message.channel.send(`${author}` + " se udavio kajisen")
            } else if (target){
                message.channel.send(`${author}` + " je udavio " + `${target}` + " kajisen")
            } else if (!target){
                message.reply("koga ces ubiti?")
            } 
        } else if (killWay === 3){
            if (target === author){
                message.channel.send(`${author}` + " se **slucajno** gurnio pod bus")
            } else if (target){
                message.channel.send(`${author}` + " je **slucajno** gurnio " + `${target}` + " pod bus")
            } else if (!target){
                message.reply("koga ces ubiti?")
            } 
        } else if (killWay === 4){
            if (target === author){
                message.channel.send(`${author}` + " se udario letvon po kicmi. Nekako...")
            } else if (target){
                message.channel.send(`${author}` + " je udario " + `${target}` + " letvon po kicmi")
            } else if (!target){
                message.reply("koga ces ubiti?")
            } 
        }
    }
}