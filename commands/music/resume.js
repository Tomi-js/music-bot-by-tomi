module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Musisz być na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym co ja!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nic teraz nie leci!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Muzyka już gra!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - ${client.player.getQueue(message).playing.title} wznowiona!`);
    },
};