module.exports = {
    name: `amigo`,
    aliases: [],
    description: `amigo`,
    usage: `amigo`,
    execute(message, args){
        message.channel.send({files: [`./images/amigo.jpg`]});
    }
}