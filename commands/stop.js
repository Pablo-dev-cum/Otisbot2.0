exports.run = (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel)
      return message.channel.send(
        "Usa un canal de voz mongolico"
      );
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)
      return message.channel.send(
        "No puedo parar porque no hay nada sonando"
      );
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("nya **se para**");
};
