const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'sposta',
  description: 'Sposta un utente',
  execute(client, message, args){
    if (!message.member.permissions.has("MOVE_MEMBERS")) return; 

    const menzione = new MessageEmbed()
    .setTitle("**ATTENZIONE!**")
    .setColor('RANDOM')
    .setDescription(`**Menziona una persona da spostare!**`)

    const memberchannel = new MessageEmbed()
    .setTitle("**ATTENZIONE!**")
    .setColor('RANDOM')
    .setDescription(`**L'utente che hai menzionato non si trova in un canale vocale!**`)
    
  
  const member = message.mentions.members.first();
if (!member) return message.reply(menzione);
if (!member.voice.channel)
  return message.channel.send(memberchannel)

  if (!message.member.voice.channel)
    return message.reply(embed);
  member.voice.setChannel(message.member.voice.channel);
 let spostautente = new MessageEmbed()
 .setDescription(`L'utente <@${member.id}> è stato spostato correttamente nel canale ${message.member.voice.channel}!`)
 .setColor('RANDOM')
 message.channel.send(spostautente)
  }
}