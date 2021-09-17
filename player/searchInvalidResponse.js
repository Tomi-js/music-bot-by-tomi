module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send({
            embed: {
                color: 'none',
                description: (`Wybór został anulowany! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });
    } else message.channel.send({
        embed: {
            color: 'none',
            description: (`Musisz wysłać prawidłowy numer od 1 do ${tracks.length}! [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};