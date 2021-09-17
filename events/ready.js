module.exports = async (client) => {
    console.log(`Zalogowano jako ${client.user.username}. Bot gotowy na ${client.guilds.cache.size} serwerach, dla ${client.users.cache.size} użytkowników`);

    client.user.setActivity(`-help`,{type:  'LISTENING'});
};