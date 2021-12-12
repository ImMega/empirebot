module.exports = {
    name: "ping", 
    aliases: [],
    description: "Pokazuje botov ping",
    usage: `ping`,
    execute(message, args) {
        message.channel.send("Mjerim svoj ping...").then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit(`Moj ping je ${ping}ms`)
        })
    }
}