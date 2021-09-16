module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Aktualnie leci ${track.title}`);
};