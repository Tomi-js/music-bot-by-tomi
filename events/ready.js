module.exports = async (client) => {
    
client.on("ready", () => {
        const statusList = [
            "-help",
            `Gram dla ${client.users.cache.size} użytkowników`
        ];
      
      setInterval(() => {
            const index = Math.floor(Math.random() * (statusList.length - 1) +1);
            client.user.setActivity(statusList[index], {type:  'PLAYING'});
      }, 3000)
      
    console.log(`Zalogowano jako ${client.user.username}. Bot gotowy na ${client.guilds.cache.size} serwerach, dla ${client.users.cache.size} użytkowników`);
      });
};
