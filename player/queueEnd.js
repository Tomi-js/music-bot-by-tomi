module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'none',
            description: `Muzyka się zatrzymała, ponieważ w kolejka jest pusta! [<@${message.member.user.id}>]`,
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};