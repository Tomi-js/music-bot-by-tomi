module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
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

        if (!args[0]) return message.channel.send({
            embed: {
                color: '#273A7A',
                description: (`Proszę podać tytuł piosenki! [<@${message.member.user.id}>]`),
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                timestamp: new Date(),
            },
        });

        client.player.play(message, args.join(" "));
    },
};