module.exports = {
    name: "8ball",
    aliases: [],
    description: "Idk",
    usage: "8ball <stogod>",
    execute(message, args){
        if(!args[0]) return;
        const rating = [
            "Da.",
            "Mozda",
            "Naravno",
            "Nema sanse",
            "Ne.",
            "Zasto",
            "Ehh",
            "Moguce"
        ]

        let random = 0;

        for(; random < 1;){
            random = Math.floor(Math.random() * rating.length);

            if(random !== 0) message.reply({ content: rating[random - 1], allowedMentions: { repliedUser: false } });
        }
    }
}