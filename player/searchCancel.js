module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Nie podałeś prawidłowej odpowiedzi... Proszę ponownie wysłać komendę!`);
};