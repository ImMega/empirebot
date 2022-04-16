const { client } = require("../../main");

module.exports = {
    name: "status",
    aliases: [],
    description: "Mijenja botov status",
    execute(message, args){
        if(message.inGuild() == true && !message.member.permissions.has("ADMINISTRATOR")) return;
        if(message.inGuild() == false && !require("./AuthorizedIDs").includes(message.author.id)) return;

        const status = args[0].toLowerCase();

        if(["online"].includes(status)) client.user.setStatus("online");
        if(["idle"].includes(status)) client.user.setStatus("idle");
        if(["dnd", "do not disturb"].includes(status)) client.user.setStatus("dnd");
        if(["offline", "invisible"].includes(status)) client.user.setStatus("invisible");
    }
}