module.exports = {
    name: 'w-filters',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}w-filters',

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

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                color: '#273A7A',
                footer: { text: 'Bot stworzony przez Tomi#9209' },
                fields: [
                    { name: 'Filtry', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `Lista wszystkich włączonych i wyłączonych filtrów\nUżyj \`${client.config.discord.prefix}filter\` aby dodać filtr do piosenki. <@${message.member.user.id}>`,
            },
        });
    },
};