module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} został dodany do kolejki, (zostało ${playlist.tracks.length} piosenek) !`);
};