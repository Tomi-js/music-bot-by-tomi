module.exports = async (client) => {
    console.log(`Zalogowano jako ${client.user.username}. Bot gotowy na ${client.guilds.cache.size} serwerach, dla ${client.users.cache.size} użytkowników`);

    client.user.setActivity(`-help`,{type:  'LISTENING'});
<<<<<<< HEAD
};
=======
};
>>>>>>> c8a7521baf8444cfd70f20bc0f14fd4e1bf9860c
