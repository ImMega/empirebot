require("dotenv").config();

const { Client, Intents } = require("discord.js");
const DisTube = require("distube").default;
const DisTubeSpotify = require("@distube/spotify").default;
const DisTubeSoundCloud = require("@distube/soundcloud").default;
const DisTubeYtDlp = require("@distube/yt-dlp").YtDlpPlugin;

const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES]
});

const player = new DisTube(client, {
    searchSongs: 1,
    leaveOnEmpty: true,
    emptyCooldown: 300,
    leaveOnFinish: false,
    leaveOnStop: false,
    plugins: [new DisTubeSpotify(), new DisTubeSoundCloud(), new DisTubeYtDlp()],
    youtubeDL: false
});

client.prefix = "-";

module.exports = { client, player }

require("fs").readdirSync("./handlers/").filter(file => file.endsWith(".js")).forEach(handler => require(`./handlers/${handler}`)(client, player))

client.login(process.env.TOKEN);