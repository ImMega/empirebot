require(`dotenv`).config()

const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const { Player, Util } = require(`discord-player`);

const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

const player = new Player(client);

client.player = player;



player
.on("trackStart", (queue, track) => {
    let musicEmbed = new MessageEmbed()
    .setColor(0x4bf542)
    .setTitle(`Now Playing`)
    .setDescription(`[${track.title}](${track.url}) - \`${track.duration}\``)
    .setThumbnail(track.thumbnail)
    .setFooter("Added by " + track.requestedBy.tag, track.requestedBy.displayAvatarURL({ dynamic: true }))
    queue.metadata.channel.send({ embeds: [musicEmbed] });
})
.on("tracksAdd", (queue, tracks) => {
    let musicEmbed = new MessageEmbed()
    .setColor(0x4bf542)
    .setTitle(`Added to queue`)
    .setDescription(`Added **${tracks.length}** tracks to the queue`)
    queue.metadata.channel.send({ embeds: [musicEmbed] });
})
.on("trackAdd", (queue, track) => {
    if(queue.previousTracks.length > 0){
        let musicEmbed = new MessageEmbed()
        .setColor(0x4bf542)
        .setTitle(`Added to queue`)
        .setDescription(`[${track.title}](${track.url}) - \`${track.duration}\``)
        .setThumbnail(track.thumbnail)
        .setFooter("Added by " + track.requestedBy.tag, track.requestedBy.displayAvatarURL({ dynamic: true }))
        queue.metadata.channel.send({ embeds: [musicEmbed] });
    }
})
.on("error", (queue, err) => {
    const errLog = client.channels.cache.find(channel => channel.id === "885813451065270275");
    if(err.statusCode === 410){
        queue.metadata.channel.send(`Ne mogu pustit tu pjesmu. El mozda age restricted?`);
        queue.destroy(false);
    } else if(err.statusCode === `DestroyedQueue`){
        return;
    } else {
        queue.metadata.channel.send(`Dogodio se nepoznati error. Izlazim iz VC...\nError: ${err.statusCode ? `${err.statusCode}` : `${err}`}`);
        queue.destroy(true);
        console.log(err);
        errLog.send(`An error happened with the music player in ${queue.metadata.channel.guild.name}: \`\`\`${err}\`\`\``);
    }
})

client.prefix = "-";

const fs = require("fs"); 

client.events = new Collection();

client.commands = new Collection();
client.cmdA = new Collection();

client.music = new Collection();
client.musicA = new Collection();

client.utils = new Collection();

client.private = new Collection();

const eventFiles = fs.readdirSync ("./events/").filter(file => file.endsWith(".js"));
for (const file of eventFiles){
    const event = require(`./events/${file}`);

    client.events.set(event.name, event);
}

const commandFiles = fs.readdirSync ("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

    command.aliases.forEach(alias => {
        client.cmdA.set(alias, command.name);
    })
}

const musicFiles = fs.readdirSync ("./commands/music/").filter(file => file.endsWith(".js"));
for (const file of musicFiles){
    const musiC = require(`./commands/music/${file}`);

    client.music.set(musiC.name, musiC);

    musiC.aliases.forEach(alias => {
        client.musicA.set(alias, musiC.name);
    })
}

const utilFiles = fs.readdirSync ("./client/").filter(file => file.endsWith(".js"));
for (const file of utilFiles){
    const util = require(`./client/${file}`);

    client.utils.set(util.name, util);
}

const aFiles = fs.readdirSync ("./commands/private/").filter(file => file.endsWith(".js"));
for (const file of aFiles){
    const priv = require(`./commands/private/${file}`);

    client.private.set(priv.name, priv);
}

client.once("ready", () => {
    console.log(`${client.user.username}` + " is online");

    client.user.setActivity(`${client.prefix}help`, { type: "LISTENING" });

    setTimeout(()=> {client.utils.get("richPresence").execute(client)}, 7000)
});



client.on('messageReactionAdd', async function(reaction, user) {
    client.events.get(`messageReactionAdd`).execute(reaction, user);
});

client.on('messageReactionRemove', async function(reaction, user) {
    client.events.get(`messageReactionRemove`).execute(reaction, user);
});

client.on("messageCreate", message => {
    const jebanje = message.content === "Jebem ti mater" || message.content === "jebem ti mater" || message.content === "JEBEM TI MATER"

    if (jebanje) {
         message.reply("i ja tebi isto!");
    }
    
    if(!message.content.startsWith(client.prefix) || message.author.bot) return;

    const args = message.content.slice(client.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const cmds = client.commands.get(command) || client.commands.get(client.cmdA.get(command));
    const pCmds = client.private.get(command);
    const musiCmds = client.music.get(command) || client.music.get(client.musicA.get(command));

    if(!cmds && !pCmds && !musiCmds) return;

    if(cmds){
        cmds.execute(message, args, client);
    } else if(pCmds){
        pCmds.execute(message, args, client);
    } else if(musiCmds){
        musiCmds.execute(message, args, client);
    }
});


client.login(process.env.token);