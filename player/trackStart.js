module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: 'none',
            title: { text: 'Aktualnie leci' },
            description: (`[${track.title}](${track.uri})`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};