module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'none',
            author: { name: `Oto wyniki wyszukiwania dla ${query}` },
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};