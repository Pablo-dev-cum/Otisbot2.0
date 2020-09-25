exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Tenes que tener una cancion puesta playazo");
  return message.channel.send(
    `Esta sonando: **${serverQueue.songs[0].title}**`
  );
};
