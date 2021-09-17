module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'none',
            description: (`[${track.title}](${track.url}) został dodany do kolejki!`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};
