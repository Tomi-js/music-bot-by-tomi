module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

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

        if (!client.player.getQueue(message).paused) return message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Muzyka już jest wznowiona! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        const success = client.player.resume(message);

        if (success) message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Piosenka została wznowiona! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });
    },
};