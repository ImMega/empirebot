module.exports = {
    name: "msg", 
    description: "sends a message as a bot (admins only)" ,
    execute(message, args, client){
        const authorID = message.author.id
        const admins = authorID === "470277450551656459" || authorID === "409040454823444482" || authorID === "772213138132828171" 
        const channel01 = client.channels.cache.find(channel => channel.id === args[0])
        
        if(admins) {
            if(!args[1]) return;
            channel01.send(args.slice(1).join(` `));
        }
    }
}