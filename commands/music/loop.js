module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: 'none',
                description: (`Musisz być na kanale głosowym! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
            embed: {
                color: 'none',
                description: (`Nie jesteś na tym samym kanale co ja! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        if (!client.player.getQueue(message)) return message.channel.send({
            embed: {
                color: 'none',
                description: (`Nic teraz nie leci! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send({
            embed: {
                color: 'none',
                description: (`Loop został wyłączony dla aktualnej kolejki! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'none',
                        description: (`Loop został włączony dla aktualnej kolejki! [<@${message.member.user.id}>]`),
                        footer: { text: 'Bot stworzony przez Tomi#9209' },
                        timestamp: new Date(),
                    },
                });
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'none',
                        description: (`Loop został wyłączony dla aktualnej kolejki! [<@${message.member.user.id}>]`),
                        footer: { text: 'Bot stworzony przez Tomi#9209' },
                        timestamp: new Date(),
                    },
                });
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'none',
                        description: (`Loop został włączony dla aktualnej kolejki! [<@${message.member.user.id}>]`),
                        footer: { text: 'Bot stworzony przez Tomi#9209' },
                        timestamp: new Date(),
                    },
                });
            };
        };
    },
};