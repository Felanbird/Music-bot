module.exports = async (client) => {
    if (client.guilds.cache.size && client.users.cache.size === 1)
        console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} server, for a total of ${client.users.cache.size} user`);

    else if (client.guilds.cache.size === 1 && client.users.cache.size > 1)
        console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} server, for a total of ${client.users.cache.size} users`);

    else if (client.guilds.cache.size > 1 && client.users.cache.size === 1)
        console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} user`);

    else
        console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setActivity(client.config.discord.activity);
};