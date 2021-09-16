module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Musisz być na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym co ja!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nic teraz nie leci!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Jest tylko 1 piosenka w kolejce!`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Kolejka została usunięta!`);
    },
};