const Discord = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = "e!";

const fs = require("fs"); 

client.commands = new Discord.Collection();

client.utils = new Discord.Collection();

const commandFiles = fs.readdirSync ("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const utilFiles = fs.readdirSync ("./client/").filter(file => file.endsWith(".js"));
for (const file of utilFiles){
    const util = require(`./client/${file}`);

    client.utils.set(util.name, util);
}

client.once("ready", () => {
    console.log(`${client.user.username}` + " is online");

    client.utils.get("richPresence").execute(client);
});

client.on('messageReactionAdd', function(reaction, user) {
    if (!user.bot) {
        //The following code will only run if the user is not a bot, therefore filering out the initial bot reactions.
        console.log(reaction);
    }
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
    if (command === "help") {
        client.commands.get("help").execute(message, args, Discord, client);
    } else
    if (command === "grill") {
        client.commands.get("grill").execute(message, args);
    } else
    if (command === "bakar"){
        client.commands.get("bakar").execute(message, args);
    } else
    if (command === "reactroleon") {
        if (message.author.id === "470277450551656459"){
            client.utils.get("reactroleon").execute(message, args, Discord, client);
            message.channel.send("React roles su ponovno ukljuceni!")
        } else
        if (!message.author.id === "470277450551656459"){
            message.channel.send("Ovu komandu moze koristit samo bot dev <@470277450551656459>")
        }
    } else 
    if (command === "cajna") {
        client.commands.get("cajna").execute(message, args);
    } else
    if (command === "klaric") {
        client.commands.get("klaric").execute(message, args);
    } else
    if (command === "klaric2") {
        client.commands.get("klaric2").execute(message, args);
    } else
    if (command === "teletabis") {
        client.commands.get("teletabis").execute(message, args);
    } else 
    if (command === "jebanje") {
        client.commands.get("jebanje").execute(message, args);
    } else 
    if (command === "jebanje2") {
        client.commands.get("jebanje2").execute(message, args);
    } else 
    if (command === "jebanje3") {
        client.commands.get("jebanje3").execute(message, args);
    } else 
    if (command === `amigo`) {
        client.commands.get(`amigo`).execute(message, args);
    }
});


client.login(process.env.token);