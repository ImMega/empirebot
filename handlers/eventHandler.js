const fs = require("fs");

module.exports = (client, player) => {
    const loadir = (dirs) => {
        const eventFiles = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith(".js"));

        for(const file of eventFiles){
            const event = require(`../events/${dirs}/${file}`);
            const eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        }
        console.log(`Discord ${dirs} events loaded`);
    }

    ["client", "message"].forEach(e => loadir(e));

    const playerEvents = fs.readdirSync(`./events/player`).filter(file => file.endsWith(".js"));

    for(file of playerEvents){
        const event = require(`../events/player/${file}`);
        const eventName = file.split(".")[0];
        player.on(eventName, event.bind(null));
    }
    console.log("Player events loaded");
}