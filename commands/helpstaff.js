const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'helpstaff',
    description: 'sends all commands',
    execute(message, args, Discord, client){


        const permessohelpstaff = new MessageEmbed()
        .setTitle("**ATTENZIONE!**")
        .setColor('RANDOM')
        .setDescription(`**Non hai abbastanza permessi per poter eseguire questo comando**`)
        

        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send(permessohelpstaff)

        const Embed = new Discord.MessageEmbed()
        .setTitle('comandi:')
        .setColor('YELLOW')
        .setDescription("Qui sono elencati i comandi dello staff per il bot Los Angeles Full RP")
        .addFields(
            {name: 'helpstaff', value: 'Manda questo elenco'},
            {name: 'ban', value: 'Banna un utente'},
            {name: 'sposta', value: 'Sposta un utente'},
            {name: 'sposta', value: 'Sposta un utente nel tuo canale'},
            {name: 'clear', value: 'clear elimina i messaggi in base al numero'},
        )
        .setImage('https://cdn.discordapp.com/attachments/787356318100619275/941748515959349258/200px-Seal_of_Los_Angeles.svg.png')
        .setFooter('Los Angeles Full RP by 𝕯𝖆𝖓𝖎𝖊𝖑#7604');

        message.channel.send(Embed);
    }
}