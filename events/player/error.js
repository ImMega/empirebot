module.exports = (channel, err) => {
    channel.send(`A jebiga neki error se dogodio: \n${err}`);
    console.log(err);
}