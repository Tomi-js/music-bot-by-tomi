module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            author: { name: `Wyniki wyszukiwania dla ${query} [<@${message.member.user.id}>]` },
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
            fields: [
                { name: `Na żądanie: [<@${message.member.user.id}>]`},
            ],
        },
    });
};