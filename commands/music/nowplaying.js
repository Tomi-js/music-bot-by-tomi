module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

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

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Nic teraz nie leci! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: '#273A7A',
                author: { name: `[${track.title}](${track.url})` },
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                fields: [
                    { name: 'Kanał', value: track.author, inline: true },
                    { name: 'Na żądanie', value: track.requestedBy.username, inline: true },
                    { name: 'Z playlisty', value: track.fromPlaylist ? 'Tak' : 'Nie', inline: true },

                    { name: 'Wyświetlenia', value: track.views, inline: true },
                    { name: 'Długość', value: track.duration, inline: true },
                    { name: 'Włączone filtry', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Głośność', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Loop', value: client.player.getQueue(message).repeatMode ? 'Tak' : 'Nie', inline: true },
                    { name: 'Wstrzymany', value: client.player.getQueue(message).paused ? 'Tak' : 'Nie', inline: true },

                    { name: 'Pasek postępu', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};