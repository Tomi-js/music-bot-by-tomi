module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'none',
            description: (`Muzyka zatrzymała się, ponieważ zostałem odłączony od kanału! [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};