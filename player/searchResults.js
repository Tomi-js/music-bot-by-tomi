module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'none',
<<<<<<< HEAD
            author: { name: `Wyniki wyszukiwania dla ${query} [<@${message.member.user.id}>]` },
=======
            author: { name: `Wyniki wyszukiwania dla ${query}` },
>>>>>>> c8a7521baf8444cfd70f20bc0f14fd4e1bf9860c
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};
