const fs = require("fs");

module.exports = {
    name: "dvopek",
    aliases: [],
    description: "DVOPEK.",
    usage: "dvopek",
    execute(message){
        const pics = fs.readdirSync("./images/DVOPEK/").filter(file => file.endsWith(".jpg") || file.endsWith(".png"));

        let random = Math.floor(Math.random() * pics.length);

        if(random > pics.length - 1) random = 2;

        message.channel.send({files: ["./images/DVOPEK/" + pics[random]]});
    }
}