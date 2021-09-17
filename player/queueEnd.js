module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            description: `Muzyka się zatrzymała, ponieważ kolejka jest pusta! [<@${message.member.user.id}>]`,
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};