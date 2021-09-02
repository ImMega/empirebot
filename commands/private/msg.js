module.exports = {
    name: "msg", 
    description: "sends a message as a bot (admins only)" ,
    execute(message, args, client){
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        
        const channel01 = client.channels.cache.find(channel => channel.id === args[0])

        if(!args[1]) return;
        
        channel01.send(args.slice(1).join(` `));
    }
}