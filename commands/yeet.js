module.exports = {
    name: "yeet", 
    description: "yeet." ,
    execute(message, args){
        const author = message.author
        const target = message.mentions.users.first()

        number = 4;
        yeetWay = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        if (yeetWay === 1){
            if (target === author){
                message.channel.send(`${author}` + " se yeetao kroz prozor")
            } else if (target){
                message.channel.send(`${author}` + " je yeetao " + `${target}` + " kroz prozor");
            } else if (!target) {
                message.reply("koga ces yeetat?");
            }
        } else if (yeetWay === 2){
            if (target === author){
                message.channel.send(`${author}` + " se yeetao kroz avion")
            } else if (target){
                message.channel.send(`${author}` + " je yeetao " + `${target}` + " kroz avion");
            } else if (!target) {
                message.reply("koga ces yeetat?");
            }
        } else if (yeetWay === 3){
            if (target === author){
                message.channel.send(`${author}` + " se yeetao u tri pizde materine")
            } else if (target){
                message.channel.send(`${author}` + " je yeetao " + `${target}` + " u tri pizde materine");
            } else if (!target) {
                message.reply("koga ces yeetat?");
            }
        } else if (yeetWay === 4){
            if (target === author){
                message.channel.send([
                    `${author}` + " se yeetao kroz prozor u neboderu",
                    "**nije se dobro zavrsilo**"
            ])
            } else if (target){
                message.channel.send(`${author}` + " je yeetao " + `${target}` + " kroz prozor u neboderu");
            } else if (!target) {
                message.reply("koga ces yeetat?");
            }
        } 
    }
}