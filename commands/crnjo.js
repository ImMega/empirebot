module.exports = {
    name: "crnjo", 
    aliases: ["nigger", "negro", "nojger"],
    description: "Koliko si posto crnjo" ,
    usage: `crnjo [target]`,
    execute(message, args){
        const target = message.mentions.users.first()

        const crnac = Math.floor(Math.random() * 100)

        if (!target){
            message.reply('Ti si ' + `${crnac}` + '% crnjo!');
        } else if (target){
            message.channel.send(`${target}` + " je " + `${crnac}` + '% crnjo!');
        }
    }
}