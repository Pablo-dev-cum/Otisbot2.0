exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Esta mas vacio que tu chanchito de ahorros");
  return message.channel.send(`
__**Playlist ctm:**__

${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}

**Esta sonando:** ${serverQueue.songs[0].title}
		`);
};
