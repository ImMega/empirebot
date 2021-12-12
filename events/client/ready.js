module.exports = (client) => {
    console.log(`${client.user.username}` + " is online");

    client.user.setActivity(`${client.prefix}help`, { type: "LISTENING" });

    setTimeout(() => require("../../activities/richPresence").execute(client));
}