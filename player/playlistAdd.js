module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'none',
            description: { text: `[${playlist.track.title}](${playlist.track.uri}) został dodany do kolejki, (zostało ${playlist.tracks.length} piosenek) !`},
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};
