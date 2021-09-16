module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Na tym serwerze nie jest odtwarzana żadna muzyka!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Musisz być na kanale głosowym!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nie mogę dołączyć do Twojego kanału głosowego, sprawdź moje uprawnienia!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} nie jest dostępna w Twoim kraju! Skipowanie...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Rozpoczyna się muzyka... poczekaj i spróbuj ponownie!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Coś poszło nie tak... Błąd : ${error}`);
    };
};
