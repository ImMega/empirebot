module.exports = {
    name: "ppsize", 
    description: "Velicina malog" ,
    execute(message, args){
        const target = message.mentions.users.first()

        const ppsize = Math.floor(Math.random() * 50)
        
        if (!target){
            message.reply('ti imas ' + `${ppsize}` + 'inch velikog!');
        } else if (target){
            message.channel.send(`${target}` + " ima " + `${ppsize}` + 'inch velikog!');
        }
    }
}