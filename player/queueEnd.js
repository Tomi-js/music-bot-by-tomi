module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'none',
            description: { text: 'Muzyka się zatrzymała, ponieważ w kolejce nie ma już muzyki!'},
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};