var settings = require('./appsettings.json');

const Discord = require('discord.js')
const { MessageAttachment, Client } = require('discord.js')
const bot = new Client()

var version = '1.0.1'

bot.on('ready', () => {
    console.log('Bot ready to serve!')
})

bot.on('message', (message) => {
    let url = ''
    if (message.content === '!a') {
        if (message.attachments.size > 0) {
            message.attachments.forEach(attachment => {
                url = attachment.url;
            });

            let channel = bot.channels.cache.get(settings.AttachmentChannelID);
            const attachment = new MessageAttachment(url);

            channel.send(attachment);
        } else {
            message.reply("um, Sir where is yours attachment?")
        }
    }
})

bot.login(settings.Token)