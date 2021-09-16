module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Wybór został anulowany!`);
    } else message.channel.send(`${client.emotes.error} - Musisz wysłać prawidłowy numer od 1 do **${tracks.length}**!`);
};