module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    description: (`Na tym serwerze nie jest odtwarzana żadna muzyka! [<@${message.member.user.id}>]`),
                    footer: { text: 'Bot stworzony przez Tomi#9209' },
                    timestamp: new Date(),
                },
            });
            break;
        case 'NotConnected':
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    description: (`Musisz być na kanale głosowym! [<@${message.member.user.id}>]`),
                    footer: { text: 'Bot stworzony przez Tomi#9209' },
                    timestamp: new Date(),
                },
            });
            break;
        case 'UnableToJoin':
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    description: (`Nie mogę dołączyć do Twojego kanału głosowego, sprawdź moje uprawnienia! [<@${message.member.user.id}>]`),
                    footer: { text: 'Bot stworzony przez Tomi#9209' },
                    timestamp: new Date(),
                },
            });
            break;
        case 'VideoUnavailable':
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    description: (`Ta piosenka nie jest dostępna w Twoim kraju! Pomijanie... [<@${message.member.user.id}>]`),
                    footer: { text: 'Bot stworzony przez Tomi#9209' },
                    timestamp: new Date(),
                },
            });
            break;
        case 'MusicStarting':
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    description: (`Muzyka się włącza... poczekaj i gdy się nie włączy spróbuj ponownie! [<@${message.member.user.id}>]`),
                    footer: { text: 'Bot stworzony przez Tomi#9209' },
                    timestamp: new Date(),
                },
            });
            break;
        default:
            message.channel.send({
                embed: {
                    color: '#ff0000',
                    description: (`Coś poszło nie tak... Błąd: ${error} [<@${message.member.user.id}>]`),
                    footer: { text: 'Bot stworzony przez Tomi#9209' },
                    timestamp: new Date(),
                },
            });
    };
};
