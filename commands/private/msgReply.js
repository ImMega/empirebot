module.exports = {
    name: `msgreply`,
    description: `Replies to a message (also admins only)`,
    execute(message, args, client){
        if(!message.member.permissions.has("ADMINISTRATOR")) return;

        if(!args[0] || !args[1]) return;
        
        message.delete();

        message.channel.messages.fetch(args[0]).then(msg => {
            msg.reply(args.slice(1).join(` `));
        }).catch(err => {
            console.log(err);
        })
    }
}