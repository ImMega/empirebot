const Discord = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = "e!";

const fs = require("fs"); 

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync ("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once("ready", () => {
    console.log(`${client.user.username}` + " is online");
});

client.on("message", message => {
    const jebanje = message.content === "Jebem ti mater" || message.content === "jebem ti mater" || message.content === "JEBEM TI MATER"

    if (jebanje) {
         message.reply("i ja tebi isto!");
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "msg") {
        client.commands.get("msg").execute(message, args, client);
    } else
    if (command === "ping") {
        client.commands.get("ping").execute(message, args);
    } else
    if (command === "yeet") {
        client.commands.get("yeet").execute(message, args);
    } else
    if (command === "reactrole") {
        client.commands.get("reactrole").execute(message, args, Discord, client);
    } else
    if (command === "reactrole1") {
        client.commands.get("reactrole1").execute(message, args, Discord, client);
    } else
    if (command === "reactrole2") {
        client.commands.get("reactrole2").execute(message, args, Discord, client);
    } else
    if (command === "reactrole3") {
        client.commands.get("reactrole3").execute(message, args, Discord, client);
    } else
    if (command === "ppsize") {
        client.commands.get("ppsize").execute(message, args);
    } else
    if (command === "simp") {
        client.commands.get("simp").execute(message, args);
    } else
    if (command === "gay") {
        client.commands.get("gay").execute(message, args);
    } else
    if (command === "kill") {
        client.commands.get("kill").execute(message, args);
    } else
    if (command === "help"){
        client.commands.get("help").execute(message, args, Discord, client);
    }
});


client.login(process.env.token);