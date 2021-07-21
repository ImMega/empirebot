module.exports = {
    name: `amigo`,
    description: `amigo`,
    execute(message, args){
        message.channel.send({files: [`./images/amigo.jpg`]});
    }
}