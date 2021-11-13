module.exports = {
    name: "bob",
    aliases: [],
    description: "bob.",
    usage: "bob",
    execute(message){
        message.channel.send({ files: ["https://c.tenor.com/6ebKSSfBw1oAAAAi/spongebob-meme.gif"] });
    }
}