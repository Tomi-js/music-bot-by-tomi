module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Musisz być na kanale głosowym! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Nie jesteś na tym samym kanale co ja! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Nic teraz nie leci! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        message.channel.send('```' + `Kolejka - ${client.player.getQueue(message).loopMode ? 'zloopowana' : ''}\nAktualnie leci: ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `#${i + 1} - ${track.title} | ${track.author}`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `I ${queue.tracks.length - 5} pozostałe piosenki` : `W playliście zostało ${queue.tracks.length} piosenek`}`) + '```');
    },
};