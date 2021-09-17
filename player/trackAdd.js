module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: '#273A7A',
            description: (`[${track.title}](${track.url}) został dodany do kolejki! [<@${message.member.user.id}>]`),
            footer: { text: 'Bot stworzony przez Tomi#9209' },
            timestamp: new Date(),
        },
    });
};