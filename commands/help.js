module.exports = {
    name: 'help',
    description: 'sends all commands',
    execute(message, args, Discord){
        const Embed = new Discord.MessageEmbed()
        .setTitle('comandi:')
        .setColor('YELLOW')
        .setDescription("Qui sono elencati i comandi per il bot Los Angeles Full RP")
        .addFields(
            {name: 'help', value: 'Manda questo elenco'},
            {name: 'assistenza', value: 'Comando per richiedere assistenza'},
            {name: 'botinfo', value: 'Informazioni sul bot'},
            {name: 'sposta', value: 'Sposta un utente nel tuo canale'},
            {name: 'clear', value: 'clear elimina i messaggi in base al numero'},
        )
        .setImage('https://cdn.discordapp.com/attachments/787356318100619275/941748515959349258/200px-Seal_of_Los_Angeles.svg.png')
        .setFooter('Los Angeles Full RP by 𝕯𝖆𝖓𝖎𝖊𝖑#7604');

        message.channel.send(Embed);
    }
}