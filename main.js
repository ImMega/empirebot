require(`dotenv`).config()

const { Client, Intents, Collection, MessageEmbed, MessageFlags } = require("discord.js");
const { Player, Util } = require(`discord-player`);
const DisTube = require("distube");
const DisTubeSpotify = require("@distube/spotify");

const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

const player = new DisTube.default(client, {
    searchSongs: 1,
    leaveOnEmpty: true,
    emptyCooldown: 300,
    leaveOnFinish: false,
    leaveOnStop: false,
    plugins: [new DisTubeSpotify.default()]
})

client.player = player;

module.exports = { client, player }

player
.on("playSong", (queue, song) => {
    if(queue.playingMsg) queue.playingMsg.delete();

    queue.textChannel.send({
        embeds:
        [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(client.user.id).displayHexColor)
            .setTitle("Now Playing")
            .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
            .setFooter(song.user.tag, song.user.displayAvatarURL({ dynamic: true }))
            .setThumbnail(song.thumbnail)
        ]
    }).then(msg => {
        queue.playingMsg = msg;
    })
})
.on("addSong", (queue, song) => {
    if(queue.songs.length === 1) return;

    queue.textChannel.send({
        embeds: [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(song.user.id).displayHexColor)
            .setTitle(`Dodano u Queue`)
            .setDescription(`[${song.name}](${song.url}) - \`${song.formattedDuration}\``)
            .setThumbnail(song.thumbnail)
            .setFooter(song.user.tag, song.user.displayAvatarURL({ dynamic: true }))
        ]
    })
})
.on("addList", (queue, list) => {
    if(list.source === "spotify") return queue.textChannel.send({
        embeds: [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(list.user.id).displayHexColor)
            .setTitle(`Playlist Dodan u Queue`)
            .setDescription(`Dodan Spotify playlist **${list.name}**`)
            .setThumbnail(list.thumbnail)
            .setFooter(list.user.tag, list.user.displayAvatarURL({ dynamic: true }))
        ]
    });

    queue.textChannel.send({
        embeds: [
            new MessageEmbed()
            .setColor(queue.voiceChannel.guild.members.cache.get(list.user.id).displayHexColor)
            .setTitle(`Playlist Dodan u Queue`)
            .setDescription(`Dodan ${list.source === "youtube" ? `YouTube` : `${list.source}`} playlist **${list.name}** sa **${list.songs.length}** pjesama`)
            .setThumbnail(list.thumbnail)
            .setFooter(list.user.tag, list.user.displayAvatarURL({ dynamic: true }))
        ]
    })
})
.on("searchNoResult", message => {
    message.reply({
        content: "E jebiga, nista nisam nasao",
        allowedMentions: {
            repliedUser: false
        }
    });
})
.on("error", (channel, err) => {
    channel.send(`A jebiga neki error se dogodio: \n${err}`);
    console.log(err);
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