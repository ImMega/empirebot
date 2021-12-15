module.exports = (message) => {
    if(message.content.toLowerCase() === "jebem ti mater") {
        message.channel.sendTyping();
        
        setTimeout(() => { message.reply("I ja tebi isto!"); }, 3000)
    }
}