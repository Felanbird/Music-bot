module.exports = {
    name: 'uptime',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}uptime',

    execute(client, message) {
        // const uptime = Date.now() - startTime;
        let seconds = Math.floor(client.uptime / 1000);
        const hours = Math.floor(seconds / 3600);
        seconds = Math.floor(seconds % 3600);
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        const h = hours < 10 ? "0" + hours : hours;
        const m = minutes < 10 ? "0" + minutes : minutes;
        const s = seconds < 10 ? "0" + seconds : seconds;
        const uptime = `${h}:${m}:${s}`

        message.channel.send(`Uptime: ${uptime}`);
    },
};