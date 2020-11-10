var settings = require('./appsettings.json');

const Discord = require('discord.js')
const { MessageAttachment, Client } = require('discord.js')
const bot = new Client()

var version = '1.0.1'

bot.on('ready', () => {
    console.log('Bot ready to serve!')
})

bot.on('message', (message) => {
    let args = message.content.substring(PREFIX.length).split(" ")
    let url = ''

    if (message.content === '!a') {
        message.attachments.forEach(attachment => {
            url = attachment.url;
        });

        let channel = bot.channels.cache.get(settings.AttachmentChannelID);
        const attachment = new MessageAttachment(url);

        channel.send(attachment);
    }
})

bot.login(settings.Token)