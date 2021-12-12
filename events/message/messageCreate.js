module.exports = (client, message) => {
    if(!message.content.startsWith(client.prefix) || message.author.bot) return require("../../activities/messageResponses")(message);

    const args = message.content.slice(client.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.get(client.cmdA.get(command));

    if(cmd) cmd.execute(message, args);
}