module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: 'none',
<<<<<<< HEAD
            title: 'Aktualnie leci',
            description: (`[${track.title}](${track.url}) [<@${message.member.user.id}>]`),
=======
            title: { text: 'Aktualnie leci' },
            description: (`[${track.title}](${track.url})`),
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
