module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

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

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Muzyka została zatrzymana! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });
    },
};