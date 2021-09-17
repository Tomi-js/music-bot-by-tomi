module.exports = (client, message, query) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            description: (`Nie znaleziono wyników w YouTube dla ${query}! [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};