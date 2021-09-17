module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            description: (`Nie podałeś prawidłowej odpowiedzi... Proszę ponownie wysłać komendę! [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};