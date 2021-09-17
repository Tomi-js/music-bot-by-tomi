module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            description: `[${playlist.track.title}](${playlist.track.url}) został dodany do kolejki, (zostało ${playlist.tracks.length} piosenek)! [<@${message.member.user.id}>]`,
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};