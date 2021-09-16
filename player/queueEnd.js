module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka się zatrzymała, ponieważ w kolejce nie ma już muzyki!`);
};