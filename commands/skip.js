exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Tenes que estar en un canal de voz playazo"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue)
    return message.channel.send(
      "No puedo skipear porque no hay nada"
    );
  serverQueue.connection.dispatcher.end("La cancion fue skipeada");
};
