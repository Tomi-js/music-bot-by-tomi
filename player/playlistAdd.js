module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'none',
<<<<<<< HEAD
            description: `[${playlist.track.title}](${playlist.track.url}) został dodany do kolejki, (zostało ${playlist.tracks.length} piosenek)! [<@${message.member.user.id}>]`,
=======
            description: { text: `[${playlist.track.title}](${playlist.track.uri}) został dodany do kolejki, (zostało ${playlist.tracks.length} piosenek) !`},
>>>>>>> c8a7521baf8444cfd70f20bc0f14fd4e1bf9860c
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
<<<<<<< HEAD
};
=======
};
>>>>>>> c8a7521baf8444cfd70f20bc0f14fd4e1bf9860c
