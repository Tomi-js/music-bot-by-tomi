module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            title: 'Aktualnie leci',
            description: (`[${track.title}](${track.url}) [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};