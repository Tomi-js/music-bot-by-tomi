module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            description: (`Muzyka została zatrzymana, ponieważ nie ma członków na kanale głosowym! [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};