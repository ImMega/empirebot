module.exports = (message) => {
    message.reply({
        content: "E jebiga, nista nisam nasao",
        allowedMentions: {
            repliedUser: false
        }
    });
}