module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Musisz być na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym co ja!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nic teraz nie leci!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Wpisz poprawny filtr`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Nie ma takiego filtra! Wypróbuj te: (8D, vibrato, pulsator...)!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Dodaję filtr do muzyki, proszę czekać... Uwaga: im dłuższa muzyka, tym dłużej to potrwa.`);
        else message.channel.send(`${client.emotes.music} - **Wyłączam** filtr muzyki, proszę czekać... Uwaga: im dłużej muzyka jest odtwarzana, tym dłużej to potrwa.`);
    },
};