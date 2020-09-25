exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Tenes que estar en un canal de voz playazo"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("There is nothing playing.");
  if (!args[0])
    return message.channel.send(
      `El volumen esta en: **${serverQueue.volume}**`
    );
  serverQueue.volume = args[0]; 
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
  return message.channel.send(`Le cambie el volumen a: **${args[0]}**`);
};
