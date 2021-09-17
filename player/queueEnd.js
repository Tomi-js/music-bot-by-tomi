module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: 'none',
<<<<<<< HEAD
            description: `Muzyka się zatrzymała, ponieważ w kolejce nie ma już muzyki! [<@${message.member.user.id}>]`,
=======
            description: { text: 'Muzyka się zatrzymała, ponieważ w kolejce nie ma już muzyki!'},
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
