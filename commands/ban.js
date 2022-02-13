const { MessageEmbed } = require('discord.js')
const config = require('../config.json');

module.exports = {
    name: 'ban',
    description: 'bans user',
    async execute(client, message, args, Discord){
        const author = message.member;
        const target = message.mentions.members.first();
        const user = message.mentions.users.first();

        const permessoban = new MessageEmbed()
        .setTitle("**ATTENZIONE!**")
        .setColor('RANDOM')
        .setDescription(`**Non hai abbastanza permessi per poter eseguire questo comando**`)
        

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permessoban)

        

        const member = message.guild.member(user);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "**Nessuna ragione specificata**";

        const menzione = new MessageEmbed()
        .setTitle("**ATTENZIONE!**")
        .setColor('RANDOM')
        .setDescription(`**Devi menzionare un utente da bannare!**`)

        const impossibile = new MessageEmbed()
        .setTitle("**ATTENZIONE!**")
        .setColor('RANDOM')
        .setDescription(`**Non è stato possibile bannare questo utente!**`)

        const utentenonvalido = new MessageEmbed()
        .setTitle("**ATTENZIONE!**")
        .setColor('RANDOM')
        .setDescription(`**L'utente non è valido o non è più nel server!**`)

        const autobannarsi = new MessageEmbed()
        .setTitle("**ATTENZIONE!**")
        .setColor('RANDOM')
        .setDescription(`**Non puoi bannare te stesso!**`)
    
        


        if (!args[0]) return message.channel.send(menzione);

        if(!member.bannable) return message.channel.send(impossibile);

        if(!member) return message.channel.send(utentenonvalido);

        if(target === author) {
            return message.reply(autobannarsi)
        }



        const embed = new Discord.MessageEmbed()
        .setTitle("**__ban__**")
        .setColor('RANDOM')
        .setDescription(`**Sei stato Bannato dal server ${message.guild.name}**`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`ban\``)
        .addField(`**Moderatore:**`, `${message.author}`)


        await member.send(embed);
        await member.ban({
            reason: reason
        })
        
        const banEmbed = new MessageEmbed()
        .setTitle("**__Ban Report__**")
        .setColor('RANDOM')
        .setDescription(`**L'utente <@${member.id}> è stato bannato da <@${message.author.id}>**`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`ban\``)
        .addField(`**Moderatore:**`, `${message.author}`)
        message.channel.send(banEmbed)

        message.client.channels.cache.get(config.canali.Ban_log).send({ embed: banEmbed });

    }
}