const Discord = require('discord.js');
const config = require('./config.json')

const client = new Discord.Client();

client.login(config.token);

const prefix = config.prefix;

client.commands = new Discord.Collection();

const fs = require('fs');

client.once('ready', () => {
    console.log("Los Angeles Full RP è online!|");

    client.user.setActivity("Los Angeles Full RP", {
        type: "STREAMING",
        url: "https://www.twitch.tv/losangelesfullrp"
      });

});

        //clear
        client.on("message", message => {
            if (message.content.startsWith("^clear")) {
        
                if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                    message.channel.send('non hai il permesso di eseguire questo comando!');
                    return;
                }
                if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                    message.channel.send('non ho il permesso di eseguire questo comando');
                    return;
                }
        
                var count = message.content.slice(7);
                count = parseInt(count);
        
                if (!count) {
                    message.channel.send("inserisci un numero valido!")
                    return
                }
        
                message.channel.bulkDelete(count, true)
                message.channel.send("**Ho eliminato " + count + " messaggi!**").then(msg => {
                    msg.delete({ timeout: 5000 })
                })
        
            }
        })
        


const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'online'){
       client.commands.get('online').execute(message, args);
    } else if(command == 'assistenza'){
        client.commands.get('assistenza').execute(message, args);
    } else if(command == 'botinfo'){
        client.commands.get('botinfo').execute(client, message, args, Discord);
    } else if(command == 'helpstaff'){
        client.commands.get('helpstaff').execute(client, message, args, Discord);
    } else if(command == 'sposta'){
        client.commands.get('sposta').execute(client, message, args, Discord);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord)
    } else if(command == 'ban'){
        client.commands.get('ban').execute(client, message, args, Discord)
    } else if(command == 'warn'){
    client.commands.get('warn').execute(client, message, args, Discord)
}
});    